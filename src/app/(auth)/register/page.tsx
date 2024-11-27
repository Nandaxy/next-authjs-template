import FormRegister from "@/app/components/auth/form-register";
import React from "react";

const Register = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Create an account</h1>
      <FormRegister />
    </div>
  );
};

export default Register;