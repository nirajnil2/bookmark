'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

async function handleAuth(formData, mode) {
  const supabase = createClient()

  const email = formData.get('email')
  const password = formData.get('password')

  if (!email || !password) {
    redirect('/error')
  }

  if (mode === 'login') {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.log("LOGIN ERROR:", error.message)
    throw new Error(error.message) // redirect mat karo abhi
  }

  console.log("LOGIN SUCCESS:", data)
}

  if (mode === 'signup') {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      console.log(error.message)
      redirect('/error')
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function login(formData) {
  await handleAuth(formData, 'login')
}

export async function signup(formData) {
  await handleAuth(formData, 'signup')
}