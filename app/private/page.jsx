import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export default async function PrivatePage() {
  const supabase = createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  // If not authenticated → redirect to login
  if (error || !user) {
    redirect('/login')
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="rounded-lg border p-6 shadow-md">
        <h1 className="text-lg font-semibold">
          Welcome back 👋
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Logged in as: {user.email}
        </p>
      </div>
    </div>
  )
}