"use client";
import InputArea from "@/components/atom/form/inputArea";
import Buttons from "@/components/atom/button/buttons";
import AuthVerificationLayout from "@/layouts/auth/authVerificationLayout";
import { Box, Text, useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { useSearchParams, redirect } from "next/navigation";
import { useState } from "react";

const svg = (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.4"
      d="M89.9 53.95V73.95C89.9 75.25 89.85 76.5 89.7 77.7C88.55 91.2 80.6 97.9 65.95 97.9H63.95C62.7 97.9 61.5 98.5 60.75 99.5L54.75 107.5C52.1 111.05 47.8 111.05 45.15 107.5L39.15 99.5C38.7498 99.034 38.2606 98.6524 37.7112 98.3777C37.1617 98.1029 36.563 97.9406 35.95 97.9H33.95C18 97.9 10 93.95 10 73.95V53.95C10 39.3 16.75 31.35 30.2 30.2C31.4 30.05 32.65 30 33.95 30H65.95C81.9 30 89.9 38 89.9 53.95Z"
      fill="#0DBA63"
    />
    <path
      d="M49.94 70C47.14 70 44.94 67.75 44.94 65C44.94 62.25 47.19 60 49.94 60C52.69 60 54.94 62.25 54.94 65C54.94 67.75 52.74 70 49.94 70ZM67.44 70C64.64 70 62.44 67.75 62.44 65C62.44 62.25 64.69 60 67.44 60C70.19 60 72.44 62.25 72.44 65C72.44 67.75 70.19 70 67.44 70ZM32.5 70C29.7 70 27.5 67.75 27.5 65C27.5 62.25 29.75 60 32.5 60C35.25 60 37.5 62.25 37.5 65C37.5 67.75 35.25 70 32.5 70Z"
      fill="#0DBA63"
    />
    <path
      d="M109.9 33.95V53.95C109.9 68.65 103.15 76.55 89.7 77.7C89.85 76.5 89.8999 75.25 89.8999 73.95V53.95C89.8999 38 81.8999 30 65.95 30H33.95C32.65 30 31.4 30.05 30.2 30.2C31.35 16.75 39.3 10 53.95 10H85.95C101.9 10 109.9 18 109.9 33.95Z"
      fill="#0DBA63"
    />
  </svg>
);

const VerifyOtp = () => {
  const [otp, setOtp] = useState<number>();
  const toast = useToast();
  const router = useRouter();
  const search = useSearchParams();
  const getEmail = search?.get("email");

  const mutation = useMutation({
    mutationFn: (any) => {
      return axiosInstance.post("/auth/verify_otp", {
        email: getEmail,
        otp: Number(otp),
      });
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

      setTimeout(() => router.replace("/dashboard"), 1000);
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
  return (
    <AuthVerificationLayout>
      <Box>
        <Box display={"flex"} justifyContent={"center"}>
          {svg}
        </Box>
        <Text fontWeight={"bold"} fontSize={["20px", "20px", "30px"]}>
          Enter OTP
        </Text>
        <Text my={"1em"}>
          we send an email to
          <span
            style={{
              color: "brand.primary",
            }}>
            {getEmail}
          </span>{" "}
          for verification
        </Text>

        <Box w={["100%", "100%", "500px"]} mx={"auto"}>
          <InputArea
            type="number"
            placeholder="Enter Code"
            bg={"#212121"}
            onChange={(e: any) => setOtp(e.target.value)}
          />
          <Buttons
            w={"100%"}
            isLoading={mutation.isPending}
            loadingText="Please wait"
            //@ts-ignore
            onClick={mutation.mutate}>
            VERIFY
          </Buttons>
        </Box>

        <Text fontWeight={"bold"} my={"1em"}>
          Didn’t Receive the OTP?{" "}
        </Text>
        <Text fontWeight={"bold"} color={"brand.primary"}>
          Resend Code
        </Text>
      </Box>
    </AuthVerificationLayout>
  );
};
export default VerifyOtp;
