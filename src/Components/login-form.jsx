
import { useState } from "react";

export default function LoginForm() {
  const [mode, setMode] = useState("login");

  const handleSubmit = async (event) => {
    console.log("HANDLE SUBMIT RUNNING");
    alert("HANDLE SUBMIT RUNNING");
    event.preventDefault();
    const form = event.target;
    const email = form.email?.value || "";
    const name = form.name?.value || "";
    const password = form.password?.value || "";

    if (mode === "signup") {
      const response = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      alert(JSON.stringify(data));
      console.log("DATA:", data);

      alert(data.message || "Signup Successful");
    }
    else {
      const response = await fetch(
        "http://localhost:5000/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      console.log("LOGIN DATA:", data);
      alert(JSON.stringify(data));

      if (response.ok) {
        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        alert("Login Successful");
        console.log("Saved user:", data.user);
        console.log("LocalStorage:", localStorage.getItem("user"));
      } else {
        alert(data.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-[55%_45%]">
        <div className="relative overflow-hidden bg-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,212,255,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(0,212,255,0.12),_transparent_35%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,14,32,0.92),rgba(7,19,37,0.96))]" />
          <div className="relative z-10 flex h-full flex-col justify-between px-8 py-10 md:px-14 md:py-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-sky-200 shadow-lg shadow-sky-400/10 backdrop-blur-xl">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-400/10 text-sky-300">S</span>
                <span className="font-semibold tracking-[0.18em] uppercase text-sky-200/80">Supreme Cryogenic</span>
              </div>

              <div className="max-w-xl space-y-6">
                <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl">
                  Welcome to Supreme Cryogenic
                </h1>
                <p className="text-lg leading-8 text-slate-300 md:text-xl">
                  Industrial-grade cryogenic solutions with fast delivery, reliable supply, and premium support for your entire business.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <p className="mb-6 text-sm uppercase tracking-[0.25em] text-sky-300/80">Feature highlights</p>
                <div className="grid gap-4 text-slate-200 sm:grid-cols-2">
                  {[
                    "Premium Quality",
                    "Reliable Supply",
                    "Fast Delivery",
                    "24/7 Support"
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3 rounded-3xl border border-slate-700/70 bg-slate-950/60 p-4 shadow-sm shadow-black/20">
                      <div className="mt-1 h-9 w-9 flex-none rounded-2xl bg-sky-400/15 text-center leading-9 text-sky-300">✓</div>
                      <p className="text-sm leading-6 text-slate-100">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-400">
              <p className="text-sm leading-7">
                Trusted by industrial supply chains for advanced cryogenic cooling and logistics.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400/80" />
                <span>Designed for B2B operations and heavy-duty workflows.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-slate-950 px-6 py-10 md:px-10">
          <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl shadow-black/30 backdrop-blur-xl md:p-10">
            <div className="mb-8 rounded-full bg-slate-900/80 p-1 shadow-inner shadow-black/20">
              <div className="grid grid-cols-2">
                {[
                  { key: "login", label: "Sign In" },
                  { key: "signup", label: "Sign Up" }
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setMode(tab.key)}
                    className={`rounded-full px-5 py-3 text-sm font-semibold transition ${mode === tab.key
                      ? "bg-cyan-400 text-slate-950 shadow-sm shadow-cyan-400/20"
                      : "text-slate-400 hover:text-white"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {mode === "signup" && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input
                    name="name"
                    placeholder="Jane Doe"
                    className="w-full rounded-3xl border border-white/10 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@business.com"
                  className="w-full rounded-3xl border border-white/10 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="Create password"
                  className="w-full rounded-3xl border border-white/10 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  required
                />
              </div>

              {mode === "signup" && (
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Confirm Password</label>
                  <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Re-enter password"
                    className="w-full rounded-3xl border border-white/10 bg-slate-900 px-5 py-4 text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    required
                  />
                </div>
              )}

              <div className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                <label className="inline-flex items-center gap-3">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-cyan-400 focus:ring-cyan-400" />
                  Remember me
                </label>
                <a href="#" className="text-cyan-300 hover:text-cyan-100">Forgot password?</a>
              </div>

              <button
                type="submit"
                className="w-full rounded-3xl bg-cyan-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                {mode === "login" ? "Sign In" : "Create Account"}
              </button>

              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <span className="h-px flex-1 bg-white/10"></span>
                <span>or continue with</span>
                <span className="h-px flex-1 bg-white/10"></span>
              </div>

              <button
                type="button"
                className="w-full rounded-3xl border border-white/10 bg-slate-900 px-6 py-4 text-base font-semibold text-slate-100 transition hover:bg-slate-800"
              >
                Continue with Google
              </button>

              <p className="text-center text-sm text-slate-500 pt-2">
                {mode === "login"
                  ? "New to Supreme Cryogenic? "
                  : "Already have an account? "}
                <button type="button" onClick={() => setMode(mode === "login" ? "signup" : "login")} className="font-semibold text-cyan-300 hover:text-cyan-100">
                  {mode === "login" ? "Create one" : "Sign in"}
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
