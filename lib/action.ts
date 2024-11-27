/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { RegisterSchema, LoginSchema } from "@/../lib/zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/../lib/prisma";
import { redirect } from "next/navigation";
import { signIn } from "../auth";
import { AuthError } from "next-auth";

export const signInUpCredentials = async (
  prevState: unknown,
  FormData: FormData
) => {
  const validateFields = RegisterSchema.safeParse(
    Object.fromEntries(FormData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validateFields.data;

  const hassedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hassedPassword,
      },
    });
  } catch (error) {
    return { message: "Failed to create user" };
  }
  redirect("/login");
};

// signInCredentials

export const signInCredentials = async (
  prevState: unknown,
  FormData: FormData
) => {
  const validateFields = LoginSchema.safeParse(
    Object.fromEntries(FormData.entries())
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validateFields.data;

  try {
    await signIn("credentials", { email, password, redirectTo: "/dashboard" });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid credentials" };
        default:
          return { message: "Failed to sign in" };
      }
    }

    throw error;
  }
};
