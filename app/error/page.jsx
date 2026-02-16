'use client'

import Link from 'next/link'

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md text-center space-y-4">
        
        <h1 className="text-2xl font-semibold text-red-600">
          Something went wrong ⚠️
        </h1>

        <p className="text-sm text-gray-600">
          We couldn’t process your request. Please try again.
        </p>

        <div className="pt-4 flex gap-3 justify-center">
          
          <Link
            href="/"
            className="rounded-lg bg-black px-4 py-2 text-white hover:opacity-90"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="rounded-lg border px-4 py-2 hover:bg-gray-100"
          >
            Retry
          </button>

        </div>
      </div>
    </div>
  )
}