"use client";

import { useActionState } from "react";
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
        <input
          id="password"
          name="password"
          type="password"
          defaultValue={state?.enteredValues?.password}
          className="w-full px-4 py-3 rounded-DEFAULT border border-outline/30 focus:border-secondary focus:ring-1 focus:ring-secondary focus:bg-surface-container-lowest outline-none transition-all duration-200 bg-surface-container text-on-surface font-body-md"
          placeholder="Enter your password"
        />
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

