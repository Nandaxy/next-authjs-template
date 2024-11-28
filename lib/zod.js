import { object, string } from "zod";

export const LoginSchema = object({
  email: string().email("Email is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must be at most 32 characters"),
});

export const RegisterSchema = object({
  name: string().min(1, "Name is required").max(20),
  email: string().email("Email is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must be at most 32 characters"),
  confirmPassword: string()
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password must be at most 32 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});
