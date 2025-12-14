import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabaseClient';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const content = searchParams.get('content');

    if (!content) return NextResponse.json({ success: false });

    // Ensure content is safe or use parameterized query
    const { data } = await supabase
        .from('transactions')
        .select('*')
        .ilike('description', `%${content}%`)
        .eq('status', 'success')
        .limit(1);

    if (data && data.length > 0) {
        return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ success: false });
}
