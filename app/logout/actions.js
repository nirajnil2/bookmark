'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function logout() {
  const supabase = createClient()

  try {
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error('Logout failed:', error.message)
      redirect(`/error?message=${encodeURIComponent(error.message)}`)
    }

    // Clear cached layout after session removal
    revalidatePath('/', 'layout')

  } catch (err) {
    console.error('Unexpected logout error:', err)
    redirect('/error?message=Unexpected logout issue')
  }

  redirect('/login')
}