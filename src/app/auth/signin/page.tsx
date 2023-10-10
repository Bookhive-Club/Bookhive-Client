"use client";
import InputArea from "@/components/atom/form/inputArea";
import Buttons from "@/components/atom/button/buttons";
import AuthLayout from "@/layouts/auth/authLayout";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { useFormik } from "formik";
import { signInValidationSchema } from "@/validations/auth/signinValidationSchema";

const SignIn = () => {
  const payload = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: any) => {};

  const formik = useFormik({
    initialValues: payload,
    validationSchema: signInValidationSchema,
    validateOnChange: true,
    onSubmit: handleSubmit,
  });

  return (
    <AuthLayout
      ctaPath="/auth/signnup"
      revarse={false}
      CTA="SIGN UP"
      layoutHeader={"Welcome Back"}>
      <form onSubmit={formik.handleSubmit}>
        <InputArea
          isInvalid={formik.touched.email && !!formik.errors.email}
          type="email"
          name="email"
          placeholder="exam@gmail.com"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          isErrorMessage={formik.errors.email}
        />
        <InputArea
          type="password"
          placeholder="********"
          label="Password"
          name="password"
          isInvalid={formik.touched.password && !!formik.errors.password}
          value={formik.values.password}
          onChange={formik.handleChange}
          isErrorMessage={formik.errors.password}
        />
        <Link href={"/auth/password/forgotten-password"}>
          <Text
            fontWeight={600}
            my={"1.5em"}
            textAlign={"right"}
            cursor={"pointer"}>
            Forgotten password ?
          </Text>
        </Link>
        <Buttons type="submit" w="100%" radius="5px">
          Log In
        </Buttons>
      </form>

      <Text my={"1.5em"} textAlign={"center"} fontWeight={"bold"}>
        Dont have an Account ?
        <Link href={"/auth/signup"}>
          {" "}
          <span
            style={{
              color: "#0DBA63",
              cursor: "pointer",
            }}>
            signup
          </span>
        </Link>
      </Text>
    </AuthLayout>
  );
};
export default SignIn;
