import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().trim().email({ message: "عنوان البريد الإلكتروني مطلوب" }),

  password: z
    .string()
    .min(6, { message: "يجب أن تتكون كلمة المرور من أكثر من 6 أحرف" })
    .max(40, { message: "يجب ألا تتجاوز كلمة المرور 40 حرفًا" }),
});
