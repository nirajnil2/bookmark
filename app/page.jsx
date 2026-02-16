import { logout } from "./logout/actions"
import DemoClientComponent from "./components/DemoClientComponent"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg space-y-6">

        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            Dashboard
          </h1>

          <form action={logout}>
            <button
              type="submit"
              className="rounded-lg bg-black px-4 py-2 text-white hover:opacity-90"
            >
              Logout
            </button>
          </form>
        </header>

        <section className="border-t pt-6">
          <DemoClientComponent />
        </section>

        <section className="rounded-lg bg-gray-100 p-4">
          <h2 className="text-lg font-medium mb-2">
            Welcome to your app 👋
          </h2>
          <p className="text-sm text-gray-600">
            You are successfully authenticated. This is your protected home page.
          </p>
        </section>

      </div>
    </main>
  )
}