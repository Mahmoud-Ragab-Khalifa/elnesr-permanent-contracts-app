"use client";

import { ActionState } from "@/types/actionState";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { login } from "../_actions/login";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();

  const initialState: ActionState = {
    errors: {},
    message: "",
    status: null,
    formData: null,
  };

  const [state, action, pending] = useActionState(login, initialState);

  useEffect(() => {
    if (state && state.status && state.message && !pending) {
      if (state.status === 201) {
        toast.success(state.message);

        router.replace("/");
      } else {
        toast.error(state.message);
      }
    }
  }, [pending, router, state]);

  return (
    <form
      action={action}
      className="grid gap-6 rounded-lg glass-strong p-5 w-full max-w-md"
    >
      <h1 className="text-center font-bold italic text-primary glow-text text-xl">
        سجل الدخول لأثبات هويتك
      </h1>

      <div className="grid gap-4">
        <label htmlFor="email" className="text-primary font-bold">
          أدخل بريدك الإلكتروني
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="input"
          placeholder="ad@example.org"
          defaultValue={state.formData?.get("email") as string}
        />
        {state.errors?.email && (
          <p className="text-red-500 italic font-bold text-sm">
            {state.errors?.email}
          </p>
        )}
      </div>

      <div className="grid gap-4">
        <label htmlFor="password" className="text-primary font-bold">
          أدخل كلمة المرور
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="input"
          placeholder="•••••••"
          defaultValue={state.formData?.get("password") as string}
        />
        {state.errors?.password && (
          <p className="text-red-500 italic font-bold text-sm">
            {state.errors?.password}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="submit-btn disabled:opacity-50"
        disabled={pending}
      >
        {pending ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
      </button>
    </form>
  );
};

export default LoginForm;
