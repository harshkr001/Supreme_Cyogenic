import { useEffect, useState } from "react";

export default function AuthModal({ isOpen, onClose }) {
  const [mode, setMode] = useState("login");

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
      <div
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div
        className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[36px] border border-white/10 bg-slate-950/95 shadow-[0_40px_120px_rgba(0,0,0,0.55)] ring-1 ring-white/5 backdrop-blur-2xl transition duration-300 ease-out"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-100 transition hover:bg-slate-800"
          onClick={onClose}
          aria-label="Close authentication modal"
        >
          ✕
        </button>

        <div className="grid min-h-[72vh] grid-cols-1 overflow-hidden lg:grid-cols-[40%_60%]">
          <div className="relative flex flex-col gap-8 overflow-hidden bg-[#07111F] px-8 py-10 sm:px-10 md:px-12">
            <div className="absolute -right-24 top-6 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl" />
            <div className="absolute -left-28 bottom-12 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 shadow-lg shadow-cyan-500/5 backdrop-blur-xl">
                <img
                  src="/logo.png.jpeg"
                  alt="Supreme Cryogenic logo"
                  className="h-11 w-11 rounded-full border border-white/10 object-cover"
                />
                <span className="font-semibold uppercase tracking-[0.25em] text-cyan-100/90">
                  Supreme Cryogenic
                </span>
              </div>

              <div className="space-y-5">
                <h2 id="auth-modal-title" className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                  Welcome to Supreme Cryogenic
                </h2>
                <p className="max-w-lg text-base leading-8 text-slate-300 sm:text-lg">
                  Sign in to manage orders, request quotations and track deliveries.
                </p>
              </div>
            </div>

            <div className="relative mt-auto overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-[0_30px_80px_rgba(14,35,66,0.45)] backdrop-blur-xl">
              <img
                src="/dry.png"
                alt="Industrial cryogenic illustration"
                className="relative h-56 w-full rounded-[28px] object-cover object-center"
              />
            </div>
          </div>

          <div className="flex items-center justify-center bg-slate-950 px-6 py-10 sm:px-8 md:px-10">
            <div className="w-full max-w-xl space-y-8">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-300/80">
                  {mode === "login" ? "Sign in" : "Create account"}
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  {mode === "login" ? "Access your account" : "Create your account"}
                </h3>
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const form = event.currentTarget;
                  const email = form.email?.value.trim();
                  const name = form.name?.value?.trim();
                  localStorage.setItem("user", JSON.stringify({
                     name: name || email,
                     email: email,
                  }));
                  onClose();
                  alert(
                    mode === "login"
                      ? `Welcome back, ${email}`
                      : `Account created for ${name || email}`
                  );
                }}
                className="space-y-6"
              >
                {mode === "signup" && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">Full name</label>
                    <input
                      name="name"
                      placeholder="Jane Doe"
                      className="w-full rounded-3xl border border-white/10 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      required
                    />
                  </div>
                )}

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-3xl border border-white/10 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-3xl border border-white/10 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    required
                  />
                </div>

                {mode === "signup" && (
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">Confirm password</label>
                    <input
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      className="w-full rounded-3xl border border-white/10 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                      required
                    />
                  </div>
                )}

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <label className="inline-flex items-center gap-3 text-sm text-slate-300">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-cyan-400 focus:ring-cyan-400"
                    />
                    Remember me
                  </label>
                  <button type="button" className="text-sm text-cyan-300 transition hover:text-cyan-100">
                    Forgot password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-3xl bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  {mode === "login" ? "Login" : "Create Account"}
                </button>

                <p className="text-center text-sm text-slate-400">
                  {mode === "login" ? "New to Supreme Cryogenic? " : "Already have an account? "}
                  <button
                    type="button"
                    onClick={() => setMode(mode === "login" ? "signup" : "login")}
                    className="font-semibold text-cyan-300 transition hover:text-cyan-100"
                  >
                    {mode === "login" ? "Sign Up" : "Sign In"}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
