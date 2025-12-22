import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import crypto from 'crypto';

export const dynamic = 'force-dynamic';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

// Helper function to generate key with GUMBALLZ prefix
// Format: GUMBALLZ-{MD5 Hex Uppercase}
// Input: NGUYENQUOCHUNGVIPPROMAX + IP + Time
function generateKey(ip: string): string {
  const time = new Date().toISOString();
  // Using user's requested VIP secret string
  const rawData = `NGUYENQUOCHUNGVIPPROMAX-${ip}-${time}`;
  
  // MD5 Hash UpperCase for Premium
  const hash = crypto.createHash('md5').update(rawData).digest('hex').toUpperCase();
  
  // Take first 16 chars for Premium
  const keySuffix = hash.substring(0, 16);
  
  return `GUMBALLZ-${keySuffix}`;
}

// Generate random string for yeumoney short link
function generateShortId(): string {
  return crypto.randomBytes(4).toString('hex');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { days = 1, amount } = body;

    if (!amount || amount <= 0) {
      return NextResponse.json({
        success: false,
        error: 'Số tiền không hợp lệ'
      }, { status: 400 });
    }
    
    // Get User IP
    let ip = request.headers.get("x-forwarded-for") || "unknown";
    if (ip.includes(',')) ip = ip.split(',')[0];

    // Generate premium key using MD5
    const keyValue = generateKey(ip);
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + days);

    // Generate short link ID
    const shortId = generateShortId();
    
    // Create yeumoney short link (format: https://yeumoney.com/{shortId})
    const shortLink = `https://yeumoney.com/${shortId}`;
    
    // The destination URL will show the key
    // For premium, we currently keep it simple as user paid.
    // If needed we can add Token here too, but prioritized user request for Format first.
    // User requested "destinationUrl... embedding premium key" (reverted in previous steps).
    // So keeping it direct.
    const destinationUrl = `${process.env.NEXT_PUBLIC_APP_URL}/keys/claim?key=${encodeURIComponent(keyValue)}`;

    // Insert key into database
    const { data: newKey, error: insertError } = await supabase
      .from('mod_keys')
      .insert({
        key_value: keyValue,
        key_type: 'PREMIUM',
        duration_days: days,
        price_vnd: amount,
        short_link: shortLink,
        destination_url: destinationUrl,
        expires_at: expiresAt.toISOString(),
        is_active: false, // Will be activated after payment
        usage_count: 0
      })
      .select()
      .single();

    if (insertError) {
      console.error('Error creating premium key:', insertError);
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to create key' 
      }, { status: 500 });
    }

    // TODO: Create actual yeumoney link via their API
    // For now, we'll return the data

    return NextResponse.json({
      success: true,
      key: newKey.key_value,
      shortLink: shortLink,
      destinationUrl: destinationUrl,
      days: days,
      amount: amount,
      expiresAt: newKey.expires_at,
      message: 'Key premium được tạo. Hoàn thành thanh toán để kích hoạt.'
    });

  } catch (error) {
    console.error('Error in generate-premium:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}
