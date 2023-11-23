"use client";
import InputArea from "@/components/atom/form/inputArea";
import Buttons from "@/components/atom/button/buttons";
import AuthVerificationLayout from "@/layouts/auth/authVerificationLayout";
import { Box, Text } from "@chakra-ui/react";

const ResetPassword = () => {
  return (
    <AuthVerificationLayout>
      <Box>
        <Text fontWeight={"bold"} fontSize={["20px", "20px", "30px"]}>
          Create New Password
        </Text>

        <Box w={["100%", "100%", "100%", "500px"]} mx={"auto"}>
          <Text my={"1em"}>
            Your new password must be different from your previous used password
          </Text>
          <InputArea
            type="password"
            label="Password"
            placeholder="********"
            bg={"#212121"}
          />

          <InputArea
            type="password"
            label="Confirm password"
            placeholder="********"
            bg={"#212121"}
          />

          <Buttons w="100%">Reset Password</Buttons>
        </Box>
      </Box>
    </AuthVerificationLayout>
  );
};
export default ResetPassword;
