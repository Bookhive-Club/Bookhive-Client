"use client";
import InputArea from "@/components/atom/form/inputArea";
import Buttons from "@/components/atom/button/buttons";
import AuthVerificationLayout from "@/layouts/auth/authVerificationLayout";
import { Box, Text } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { axiosInstance } from "@/utils/axios";
import { AUTH_COOKIE } from "@/constants";

const ForgottenPassowrd = () => {
  const [email, setEmail] = useState("");

  const payload: {
    email: string;
  } = {
    email: email,
  };
  const mutation = useMutation({
    mutationKey: ["reset_password"],
    mutationFn: () => {
      //@ts-ignore
      return axiosInstance("", payload);
    },
    onSuccess(data) {},
    onError: (error: AxiosError) => {},
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <AuthVerificationLayout>
      <Box>
        <Text fontWeight={"bold"} fontSize={["20px", "20px", "30px"]}>
          Reset Password
        </Text>

        <Box w={["100%", "100%", "500px"]} mx={"auto"}>
          <Text my={"1em"}>
            Enter the email associated with your account and we will send an
            email with instructions on how to reset your password
          </Text>
          <form>
            <InputArea
              type="email"
              label="Email"
              placeholder="Email Address"
              bg={"#212121"}
              onChange={handleChange}
              isRequired
            />

            <Buttons w="100%" type="submit">
              VERIFY
            </Buttons>
          </form>
        </Box>

        <Text fontWeight={"bold"} my={"1em"}>
          Remembered password?{" "}
          <span
            style={{
              color: "brand.primary",
            }}>
            Login
          </span>
        </Text>
      </Box>
    </AuthVerificationLayout>
  );
};
export default ForgottenPassowrd;
