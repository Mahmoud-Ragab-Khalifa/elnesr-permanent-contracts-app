"use client";

const LoginForm = () => {
  return (
    <form className="grid gap-6 rounded-lg glass-strong p-5 w-full max-w-md">
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
        />
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
        />
      </div>

      <button type="submit" className="submit-btn">
        تسجيل الدخول
      </button>
    </form>
  );
};

export default LoginForm;
