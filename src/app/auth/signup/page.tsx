"use client";
import InputArea from "@/components/form/inputArea";
import Buttons from "@/components/micro/buttons";
import AuthLayout from "@/layouts/authLayout";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { useFormik } from "formik";
import { signUpValidationSchema } from "@/validations/auth/signupValidationSchema";

const SignUp = () => {
  const payload = {
    email: "",
    username: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  };

  const handleSubmit = (values: any) => {};

  const formik = useFormik({
    initialValues: payload,
    validationSchema: signUpValidationSchema,
    validateOnChange: true,
    onSubmit: handleSubmit,
  });

  console.log(formik.values.username);
  return (
    <AuthLayout
      ctaPath="/auth/signin"
      CTA="SIGN IN"
      layoutHeader={"Create an Account"}>
      <form onSubmit={formik.handleSubmit}>
        <InputArea
          type="text"
          placeholder="Book Hive"
          label={"Username"}
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          isInvalid={formik.touched.username && !!formik.errors.username}
          isErrorMessage={formik.errors.username}
        />
        <InputArea
          type="email"
          name="email"
          placeholder="exam@gmail.com"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          isInvalid={formik.touched.email && !!formik.errors.email}
          isErrorMessage={formik.errors.email}
        />
        <InputArea
          type="tel"
          name="phone_number"
          placeholder="09102321234"
          label="Phone number"
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          isInvalid={
            formik.touched.phone_number && !!formik.errors.phone_number
          }
          isErrorMessage={formik.errors.phone_number}
        />
        <InputArea
          type="password"
          name="password"
          placeholder="********"
          label="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          isErrorMessage={formik.errors.password}
          isInvalid={formik.touched.password && !!formik.errors.password}
        />

        <InputArea
          type="password"
          name="confirm_password"
          placeholder="********"
          label="Confirm Password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          isErrorMessage={formik.errors.confirm_password}
          isInvalid={
            formik.touched.confirm_password && !!formik.errors.confirm_password
          }
        />

        <Buttons type="submit" w="100%" radius="5px" my={"1em"}>
          Create Account
        </Buttons>
      </form>

      <Text my={"1.5em"} textAlign={"center"} fontWeight={"bold"}>
        Already have an account?
        <Link href={"/auth/signin"}>
          {" "}
          <span
            style={{
              color: "#0DBA63",
              cursor: "pointer",
            }}>
            Login
          </span>
        </Link>
      </Text>
    </AuthLayout>
  );
};
export default SignUp;
