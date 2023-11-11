"use client";
import InputArea from "@/components/atom/form/inputArea";
import Buttons from "@/components/atom/button/buttons";
import AuthLayout from "@/layouts/auth/authLayout";
import { Text, useToast } from "@chakra-ui/react";
import Link from "next/link";
import { useFormik } from "formik";
import { signUpValidationSchema } from "@/validations/auth/signupValidationSchema";
import { setCookie } from "cookies-next";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";
import SelectionField from "@/components/atom/form/selectField";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const toast = useToast();
  const router = useRouter();

  const payload = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    gender: "",
  };

  const mutation = useMutation({
    mutationFn: (formData: any) => {
      return axiosInstance.post("/auth/create_account", formData);
    },
    onSuccess: (response) => {
      //@ts-ignore
      const { message } = response?.data;

      toast({
        variant: "solid",
        status: "success",
        description: message,
        position: "top",
      });
      const user_email = formik.values.email;
      const url = `otp?email=${user_email}`;
      setTimeout(() => router.push(url), 1000);
      setCookie("_auth_token", "");
    },
    onError: (err: any) => {
      const { data } = err?.response;
      toast({
        variant: "solid",
        status: "error",
        description: data?.message,
        position: "top",
      });
    },
  });

  const handleSubmit = (values: any) => {
    mutation.mutate(values);
  };

  //check if requeest is usccessfull

  const formik = useFormik({
    initialValues: payload,
    validationSchema: signUpValidationSchema,
    validateOnChange: true,
    onSubmit: handleSubmit,
  });

  return (
    <AuthLayout
      ctaPath="/auth/signin"
      CTA="SIGN IN"
      layoutHeader={"Create an Account"}>
      <form onSubmit={formik.handleSubmit}>
        <InputArea
          type="text"
          placeholder="William"
          label={"First Name"}
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          isInvalid={formik.touched.firstName && !!formik.errors.firstName}
          isErrorMessage={formik.errors.firstName}
        />

        <InputArea
          type="text"
          placeholder="Shakespare"
          label={"Last Name"}
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          isInvalid={formik.touched.lastName && !!formik.errors.lastName}
          isErrorMessage={formik.errors.lastName}
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
        {/* <InputArea
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
        /> */}
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

        {/* <InputArea
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
        /> */}
        <SelectionField
          name="gender"
          onChange={formik.handleChange}
          isInvalid={formik.touched.gender && !!formik.errors.gender}
          isErrorMessage={formik.errors.gender}
          size={"lg"}
          label="Gender">
          <option value="Make">Male</option>
          <option value="Femail">Female</option>
        </SelectionField>

        <Buttons
          type="submit"
          w="100%"
          radius="5px"
          my={"1em"}
          isLoading={mutation.isPending}>
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
