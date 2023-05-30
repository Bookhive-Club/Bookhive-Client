"use client";
import InputArea from "@/components/form/inputArea";
import Buttons from "@/components/micro/buttons";
import AuthLayout from "@/layouts/authLayout";
import { Text } from "@chakra-ui/react";
const SignIn = () => {
  return (
    <AuthLayout layoutHeader={"Welcome Back"}>
      <InputArea type="email" placeholder="exam@gmail.com" label="Email" />
      <InputArea type="password" placeholder="********" label="Password" />
      <Text
        fontWeight={600}
        my={"1.5em"}
        textAlign={"right"}
        cursor={"pointer"}>
        Forgotten password ?
      </Text>
      <Buttons w="100%" radius="5px">
        Log In
      </Buttons>

      <Text my={"1.5em"} textAlign={"center"} fontWeight={"bold"}>
        Dont have an Account ?
        <span
          style={{
            color: "#0DBA63",
            cursor: "pointer",
          }}>
          {" "}
          signup
        </span>
      </Text>
    </AuthLayout>
  );
};
export default SignIn;
