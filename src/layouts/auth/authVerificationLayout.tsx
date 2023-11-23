"use client";
import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const AuthVerificationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex h={"100vh"} alignItems={"center"}>
      <Box
        bg={"brand.secondary"}
        py={"5em"}
        px={"2em"}
        w={["90%", "90%", "100%", "1050px"]}
        mx={"auto"}
        textAlign={"center"}>
        {children}
      </Box>
    </Flex>
  );
};
export default AuthVerificationLayout;
