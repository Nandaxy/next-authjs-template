"use client";

import Link from "next/link";
import { signInUpCredentials } from "@/../lib/action";

import { useActionState } from "react";
import { RegisterButton } from "../button";

const FormRegister = () => {
  const [state, formAction] = useActionState(signInUpCredentials, null);

  return (
    <form action={formAction} className="space-y-6">
      {state?.message ? (
        <div className="p-4 rounded-lg bg-red-100" role="alert">
          <span className="text-sm font-medium text-red-600">
            {state?.message}
          </span>
        </div>
      ) : null}
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name"
          required
        />
        <div aria-live="polite" aria-atomic="true">
          <span className="text-sm text-red-600">{state?.error?.name}</span>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Email"
            required
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-sm text-red-600">{state?.error?.email}</span>
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Password"
            required
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-sm text-red-600">
              {state?.error?.password}
            </span>
          </div>
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Confirm Password"
            required
          />
          <div aria-live="polite" aria-atomic="true">
            <span className="text-sm text-red-600">
              {" "}
              {state?.error?.confirmPassword}
            </span>
          </div>
        </div>
      </div>

      <RegisterButton />
      <p>
        Already have account{" "}
        <Link href="/login" className="text-blue-700 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default FormRegister;
