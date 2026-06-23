"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { loginSchema } from "@/lib/validations/login";

export const login = async (prevState: unknown, formData: FormData) => {
  const result = loginSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!result.success) {
    return {
      errors: result.error.formErrors.fieldErrors,
      status: 400,
      formData,
    };
  }

  try {
    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.signInWithPassword({
      email: result.data.email,
      password: result.data.password,
    });

    if (error) {
      return {
        status: error.status,
        message: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
      };
    }

    return {
      status: 201,
      message: "تم تسجيل الدخول بنجاح",
    };
  } catch (error) {
    console.error(error);

    return {
      status: 500,
      message: "خطأ غير متوقع، تحقق من اتصالك",
    };
  }
};
