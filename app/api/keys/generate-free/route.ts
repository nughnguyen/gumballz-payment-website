import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";

export const dynamic = 'force-dynamic';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

// Yeulink API configuration
const YEULINK_TOKEN = "16ad669a-9404-48d7-aa63-8522b4014e11";
const YEULINK_API_URL = "https://yeulink.com/st";

// Helper function to generate key based on User IP and Time
// Format: GUMFREE-{MD5 Hash of NGUYENQUOCHUNG+IP+Time}
function generateKey(ip: string): string {
  const time = new Date().toISOString(); // Include Date + Time
  const rawData = `NGUYENQUOCHUNGFREE-${ip}-${time}`;
  
  // Create MD5 hash (Hex lowercase)
  const hash = crypto.createHash('md5').update(rawData).digest('hex');
  
  // Take first 12 characters
  const keySuffix = hash.substring(0, 12);
  
  return `GUMFREE-${keySuffix}`;
}

// Get today's date string in Vietnam timezone (YYYY-MM-DD)
function getTodayDateString(): string {
  const now = new Date();
  // Convert to Vietnam timezone (UTC+7)
  const vnTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }));
  return vnTime.toISOString().split('T')[0];
}

// Get end of day in Vietnam timezone
function getEndOfDayVN(): Date {
  const now = new Date();
  const vnTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }));
  
  // Set to 23:59:59.999 VN time
  vnTime.setHours(23, 59, 59, 999);
  
  return vnTime;
}

// Create yeulink short link
async function createYeulinkShortLink(destinationUrl: string): Promise<string> {
  const yeulinkUrl = `${YEULINK_API_URL}?token=${YEULINK_TOKEN}&url=${encodeURIComponent(destinationUrl)}`;
  
  try {
    const response = await fetch(yeulinkUrl, {
      method: 'GET',
      redirect: 'manual' // Don't follow redirects to capture the 302 Location
    });
    
    const location = response.headers.get('location') || response.headers.get('Location');
    
    if (location) {
        return location;
    } else {
        console.error('Yeulink API did not return a Location header');
        return yeulinkUrl;
    }
  } catch (error) {
    console.error('Error creating yeulink:', error);
    return yeulinkUrl;
  }
}

export async function POST(req: NextRequest) {
  try {
    const today = getTodayDateString();
    
    // Get User IP
    let ip = req.headers.get("x-forwarded-for") || "unknown";
    if (ip.includes(',')) ip = ip.split(',')[0]; // Take first IP if multiple

    // AUTO-CLEANUP: Delete expired keys
    (async () => {
        try {
            await supabase.from('mod_keys').delete().lt('expires_at', new Date().toISOString());
        } catch (e) {
            console.error("Auto-cleanup exception:", e);
        }
    })();
    
    // Check if a free key already exists for today
    const { data: existingKey } = await supabase
      .from('mod_keys')
      .select('*')
      .eq('key_type', 'FREE')
      .eq('created_date', today)
      .single();

    if (existingKey) {
       // SECURITY CHECK: Check if link is exposed (contains GUMFREE or old path)
       const isExposed = existingKey.destination_url && (
           existingKey.destination_url.includes("GUMFREE") || 
           existingKey.destination_url.includes("/key/free/")
       );

       // If exposed or no token -> DELETE and Re-create
       if (isExposed || !existingKey.verification_token) {
           console.log("Deleting insecure key...");
           await supabase.from('mod_keys').delete().eq('id', existingKey.id);
       } else {
           return NextResponse.json({
            success: true,
            shortLink: existingKey.short_link,
            expiresAt: existingKey.expires_at,
            message: "Key hôm nay đã sẵn sàng"
          });
       }
    }

    // 2. Create NEW Secure Key
    const keyValue = generateKey(ip);
    const verificationToken = crypto.randomUUID(); // Secure Token
    const expiresAt = getEndOfDayVN();
    
    // URL points to Token, NOT Key
    const destinationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/key/receive?token=${verificationToken}`;
    const shortLink = await createYeulinkShortLink(destinationUrl);

    const { data: newKey, error: insertError } = await supabase
      .from('mod_keys')
      .insert({
        key_value: keyValue,
        key_type: 'FREE',
        created_date: today,
        duration_days: 1,
        expires_at: expiresAt.toISOString(),
        is_active: true,
        usage_count: 0,
        short_link: shortLink,
        destination_url: destinationUrl,
        verification_token: verificationToken // IMPORTANT
      })
      .select()
      .single();

    if (insertError) {
      console.error('Insert error:', insertError);
      return NextResponse.json({ success: false, error: `Lỗi Database: ${insertError.message}` }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      shortLink: shortLink,
      expiresAt: expiresAt.toISOString(),
      message: "Đã tạo key mới thành công"
    });

  } catch (error) {
    console.error('Fatal error:', error);
    return NextResponse.json({ success: false, error: "Lỗi hệ thống" }, { status: 500 });
  }
}
