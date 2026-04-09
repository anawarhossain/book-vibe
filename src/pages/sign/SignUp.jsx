import React from "react";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Right Side: Sign Up Form */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Create account
            </h2>
            <p className="text-slate-500 mt-2">
              Already have an account?{" "}
              <Link
                to="/sign-in"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                placeholder="jane@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
              <p className="mt-2 text-xs text-slate-400">
                Must be at least 8 characters long.
              </p>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label className="text-sm text-slate-600">
                I agree to the{" "}
                <a href="#" className="text-indigo-600 underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-indigo-600 underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-[0.98] transition-all">
              Create account
            </button>
          </form>

          {/* Social Sign Up */}
          <div className="mt-8">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <span className="relative px-3 bg-white text-sm text-slate-400 uppercase tracking-widest">
                or
              </span>
            </div>

            <button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
                className="h-5 w-5"
              />
              <span className="text-sm font-medium text-slate-700">
                Sign up with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
