import { z } from "zod";

/** Common rules */
export const emailSchema = z
  .string({ required_error: "Email is required" })
  .trim()
  .toLowerCase()
  .email("Enter a valid email address");

const passwordSchema = z
  .string({ required_error: "Password is required" })
  .min(8, "At least 8 characters")
  .max(128, "Too long")
  .refine((v) => /[A-Z]/.test(v), "Include an uppercase letter")
  .refine((v) => /[a-z]/.test(v), "Include a lowercase letter")
  .refine((v) => /\d/.test(v), "Include a number")
  .refine((v) => /[^A-Za-z0-9]/.test(v), "Include a special character")
  .refine((v) => !/\s/.test(v), "No spaces");

/** Sign in (email + password) */
export const signInSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required"),
});

/** Sign up (email + password + confirm) */
export const signUpSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string({ required_error: "Confirm your password" }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["confirmPassword"],
      });
    }
  });
