"use client";
import InputArea from "@/components/atom/form/inputArea";
import Buttons from "@/components/atom/button/buttons";
import AuthLayout from "@/layouts/auth/authLayout";
import { Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useFormik } from "formik";
import { signInValidationSchema } from "@/validations/auth/signinValidationSchema";
import { axiosInstance } from "@/utils/axios";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();
  const toast = useToast();

  const payload = {
    email: "",
    password: "",
  };

  const mutation = useMutation({
    mutationFn: (formData: any) => {
      return axiosInstance.post("/auth/login", formData);
    },
  });

  const handleSubmit = async (values: any) => {
    mutation.mutate(values);
  };

  useEffect(() => {
    //if successfull
    if (mutation.isSuccess) {
      const { data } = mutation?.data;
      const token = data?.token;
      setCookie("_auth_token", token);

      toast({
        variant: "solid",
        status: "success",
        description: data?.message,
        position: "top",
      });

      setTimeout(() => router.push("/dashboard"), 1500);
    }
  }, [mutation.isSuccess]);

  useEffect(() => {
    //display error message if any
    //@ts-ignore
    if (mutation.isError && mutation?.error?.response) {
      //@ts-ignore
      const { data } = mutation?.error?.response;
      toast({
        variant: "solid",
        status: "error",
        description: data?.error,
        position: "top",
      });
    }
  }, [mutation.isError]);

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
        <Buttons
          type="submit"
          w="100%"
          radius="5px"
          isLoading={mutation.isPending}
          loadingText="Logging In">
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
