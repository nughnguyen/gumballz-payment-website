import { NextResponse } from 'next/server';
import { supabase } from '@/app/utils/supabaseClient';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const txId = searchParams.get('id');

    if (!txId) return NextResponse.json({ success: false });

    // Poll status of specific transaction ID
    const { data } = await supabase
        .from('transactions')
        .select('status')
        .eq('id', txId)
        .eq('status', 'success')
        .maybeSingle();

    if (data) {
        return NextResponse.json({ success: true });
    }
    
    return NextResponse.json({ success: false });
}
