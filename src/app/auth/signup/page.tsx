"use client";
import InputArea from "@/components/form/inputArea";
import Buttons from "@/components/micro/buttons";
import AuthLayout from "@/layouts/authLayout";
import { Text } from "@chakra-ui/react";
const SignUp = () => {
  return (
    <AuthLayout layoutHeader={"Create an Account"}>
      <InputArea type="text" placeholder="Book Hive" label={"Username"} />
      <InputArea type="email" placeholder="exam@gmail.com" label="Email" />
      <InputArea type="tel" placeholder="09102321234" label="Phone number" />
      <InputArea type="tel" placeholder="********" label="Password" />
      <Buttons w="100%" radius="5px">
        Create Account
      </Buttons>

      <Text my={"1.5em"} textAlign={"center"} fontWeight={"bold"}>
        Already have an account?
        <span
          style={{
            color: "#0DBA63",
            cursor: "pointer",
          }}>
          Login
        </span>
      </Text>
    </AuthLayout>
  );
};
export default SignUp;
