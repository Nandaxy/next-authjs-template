import FormLogin from "@/components/auth/form-login";
import { GithubButton, GoogleButton } from "@/components/auth/social-button";
import React from "react";

const Login = ({ searchParams }: { searchParams?: { error?: string } }) => {
  const params = searchParams?.error;
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Login your account</h1>
      {params === "OAuthAccountNotLinked" ? (
        <div className="p-4 rounded-lg bg-red-100" role="alert">
          <span className="text-sm font-medium text-red-600">
            Accont Already Linked with another provider
          </span>
        </div>
      ) : null}
      <FormLogin />
      <div className="my-4 flex items-center before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
        <p className="mx-4 mb-0 text-center font-semibold text-gray-600">OR</p>
      </div>
      <GoogleButton />
      <GithubButton />
    </div>
  );
};

export default Login;
