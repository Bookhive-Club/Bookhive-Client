"use client";
import InputArea from "@/components/form/inputArea";
import Buttons from "@/components/micro/buttons";
import AuthVerificationLayout from "@/layouts/authVerificationLayout";
import { Box, Text } from "@chakra-ui/react";

const ForgottenPassowrd = () => {
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
          <InputArea
            type="number"
            label="Email"
            placeholder="Email Address"
            bg={"#212121"}
          />

          <Buttons w="100%">VERIFY</Buttons>
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
