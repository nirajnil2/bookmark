import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form className="w-full max-w-sm space-y-4 rounded-lg border p-6 shadow">
        
        <h1 className="text-xl font-semibold text-center">
          Welcome Back
        </h1>

        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="rounded border px-3 py-2 outline-none focus:ring-2"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="rounded border px-3 py-2 outline-none focus:ring-2"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <button
            formAction={login}
            type="submit"
            className="flex-1 rounded bg-black py-2 text-white hover:opacity-90"
          >
            Log In
          </button>

          <button
            formAction={signup}
            type="submit"
            className="flex-1 rounded border py-2 hover:bg-gray-100"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  )
}