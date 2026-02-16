import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(`${origin}/login`)
  }

  const supabase = createClient()

  try {
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error('OAuth exchange failed:', error.message)
      return NextResponse.redirect(`${origin}/error`)
    }

  } catch (err) {
    console.error('Unexpected OAuth error:', err)
    return NextResponse.redirect(`${origin}/error`)
  }

  return NextResponse.redirect(`${origin}/dashboard`)
}