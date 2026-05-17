"use client";

import { useActionState, useState } from "react";
import { loginAction } from "./action";

interface ActionState {
  error: string,
  enteredValues?: { username: string, password: string },
}

const initialState: ActionState = {
  error: "",
};

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(loginAction, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={formAction} className="space-y-6">
      {state?.error && (
        <div className="p-4 bg-error-container border border-error/20 text-on-error-container rounded-DEFAULT text-sm font-body-md">
          {state.error}
        </div>
      )}

      <div>
        <label 
          className="block text-label-lg font-label-lg uppercase tracking-widest text-on-surface-variant mb-2" 
          htmlFor="username"
        >
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          defaultValue={state?.enteredValues?.username}
          className="w-full px-4 py-3 rounded-DEFAULT border border-outline/30 focus:border-secondary focus:ring-1 focus:ring-secondary focus:bg-surface-container-lowest outline-none transition-all duration-200 bg-surface-container text-on-surface font-body-md"
          placeholder="Enter your username"
        />
      </div>

      <div>
        <label 
          className="block text-label-lg font-label-lg uppercase tracking-widest text-on-surface-variant mb-2" 
          htmlFor="password"
        >
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            defaultValue={state?.enteredValues?.password}
            className="w-full px-4 py-3 pr-12 rounded-DEFAULT border border-outline/30 focus:border-secondary focus:ring-1 focus:ring-secondary focus:bg-surface-container-lowest outline-none transition-all duration-200 bg-surface-container text-on-surface font-body-md"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute inset-y-0 right-3 flex items-center text-on-surface-variant hover:text-secondary transition-colors duration-200"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              /* Eye-off icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            ) : (
              /* Eye icon */
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-primary hover:bg-secondary text-on-primary hover:text-on-secondary disabled:opacity-50 disabled:cursor-not-allowed font-label-lg text-label-lg uppercase tracking-widest py-4 transition-all duration-300 transform active:scale-95 shadow-[0_4px_15px_rgba(49,48,48,0.1)] hover:shadow-[0_8px_25px_rgba(233,195,73,0.3)] rounded-DEFAULT mt-6 cursor-pointer"
      >
        {isPending ? "Signing In..." : "Sign In"}
      </button>
    </form>
  );
}

