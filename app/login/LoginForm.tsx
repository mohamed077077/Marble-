"use client";

import { useActionState, useState } from "react";
import { loginAction } from "./action";

interface ActionState {
  error: string;
  enteredValues?: {
    username: string;
    password: string;
  };
}

const initialState: ActionState = {
  error: "",
};

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    loginAction,
    initialState
  );

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full max-w-md">


    <form
    action={formAction}
    className="relative space-y-6 rounded-3xl border border-outline/15 bg-surface/95 backdrop-blur p-8 shadow-[0_25px_60px_rgba(0,0,0,0.18)] transition-all duration-300 hover:shadow-[0_35px_80px_rgba(0,0,0,0.22)]"
  >
        {/* Header */}
        <div className="space-y-2 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A11.955 11.955 0 0112 15c2.5 0 4.82.76 6.879 2.055M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 1a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-on-surface">
            Welcome Back
          </h1>

          <p className="text-sm text-on-surface-variant">
            Sign in to your account
          </p>
        </div>

        {/* Error */}
        {state?.error && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-500">
            {state.error}
          </div>
        )}

        {/* Username */}
        <div className="space-y-2">
          <label
            htmlFor="username"
            className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant"
          >
            Username
          </label>

          <input
            id="username"
            name="username"
            type="text"
            defaultValue={state?.enteredValues?.username}
            placeholder="Enter your username"
            className="w-full rounded-xl border border-outline/20 bg-surface-container px-4 py-3 shadow-sm transition-all duration-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-semibold uppercase tracking-wider text-on-surface-variant"
          >
            Password
          </label>

          <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            defaultValue={state?.enteredValues?.password}
            placeholder="Enter your password"
            className="w-full rounded-xl border border-outline/20 bg-surface-container px-4 py-3 pr-12 shadow-sm transition-all duration-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 focus:shadow-lg"
          />

            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant transition hover:text-primary cursor-pointer"
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-xl bg-primary py-3 font-semibold text-on-primary shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending ? "Signing In..." : "Sign In"}
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-on-surface-variant">
          Secure authentication
        </p>
      </form>
    </div>
  );
}