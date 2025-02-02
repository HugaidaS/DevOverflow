"use client";

import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      schema={SignUpSchema}
      defaultValues={{
        email: "",
        password: "",
        name: "",
        username: "",
      }}
      onSubmit={(data) => {
        return Promise.resolve({
          success: true,
          data,
        });
      }}
    />
  );
};
export default SignUp;
