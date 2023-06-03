"use client";
import InputArea from "@/components/form/inputArea";
import Buttons from "@/components/micro/buttons";
import AuthLayout from "@/layouts/authLayout";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const userValidationSchema = Yup.object().shape({
    email: Yup.string().required().email(),
    phone_number: Yup.string().required().min(8, ""),
    username: Yup.string().required().min(3, ""),
    password: Yup.string().required().min(3, ""),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

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
    validationSchema: userValidationSchema,
    validateOnChange: true,
    onSubmit: handleSubmit,
  });

  return (
    <AuthLayout CTA="SIGN IN" layoutHeader={"Create an Account"}>
      <form onSubmit={formik.handleSubmit}>
        <InputArea
          type="text"
          placeholder="Book Hive"
          label={"Username"}
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          isErrorMessage={formik.errors.username}
        />
        <InputArea
          type="email"
          name="email"
          placeholder="exam@gmail.com"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          isErrorMessage={formik.errors.email}
        />
        <InputArea
          type="tel"
          name="phone_number"
          placeholder="09102321234"
          label="Phone number"
          value={formik.values.phone_number}
          onChange={formik.handleChange}
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
        />

        <InputArea
          type="password"
          name="confirm_password"
          placeholder="********"
          label="Password"
          value={formik.values.confirm_password}
          onChange={formik.handleChange}
          isErrorMessage={formik.errors.confirm_password}
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
