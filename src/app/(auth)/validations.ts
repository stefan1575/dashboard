import { z } from "zod"

export const email = z
  .string()
  .min(1, { message: "Email is required" })
  .email({ message: "Must be a valid Email" })
  .transform((str) => str.toLowerCase().trim())

export const password = z
  .string()
  .min(1, { message: "Password is required" })
  .min(10, { message: "Password must contain at least 10 characters" })
  .max(100, { message: "Password must contain less than 100 characters" })
  .transform((str) => str.trim())

export const Signup = z
  .object({
    email,
    password,
    confirmPassword: password,
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      })
    }
  })

export const Login = z.object({
  email,
  password: z.string(),
})

export const ForgotPassword = z.object({
  email,
})

export const ResetPassword = z
  .object({
    password: password,
    passwordConfirmation: password,
    token: z.string().optional(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"], // set the path of the error
  })

export const ChangePassword = z.object({
  currentPassword: z.string(),
  newPassword: password,
})
