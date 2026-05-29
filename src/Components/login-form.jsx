export default function LoginForm() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl shadow-2xl border w-full max-w-5xl overflow-hidden">

        <div className="grid md:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="p-16">

            <h1 className="text-5xl font-bold text-gray-900">
              Login to your account
            </h1>

            <p className="text-gray-500 mt-2">
              Enter your email below to login to your account
            </p>

            <form className="mt-8 space-y-6">

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="m@example.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">

                  <label className="text-sm font-medium">
                    Password
                  </label>

                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-black"
                  >
                    Forgot your password?
                  </a>

                </div>

                <input
                  type="password"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
              >
                Login
              </button>

              <button
                type="button"
                className="w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition"
              >
                Login with Google
              </button>

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex bg-black text-white items-center justify-center p-16">

            <div className="text-center">

              <h2 className="text-4xl font-bold">
                SUPREME
              </h2>

              <p className="mt-2 tracking-[0.3em] text-gray-300">
                CRYOGENIC
              </p>

              <p className="mt-6 text-gray-400 text-sm leading-7">
                Premium Dry Ice Solutions
                <br />
                For Every Industry
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}