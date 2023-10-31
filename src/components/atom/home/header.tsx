"use client";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Logo } from "../icons/logo";
import ContainerLayout from "@/layouts/container/containerLayout";
import Buttons from "../button/buttons";
import Link from "next/link";

const Header = () => {
  return (
    <ContainerLayout>
      <Flex py={"1em"} justify={"space-between"}>
        <Box as={"a"} href="/">
          <Logo />
        </Box>

        <Box display={"flex"} gap="1em" alignItems={"center"}>
          <Link href="/auth/signin">
            <Text cursor={"pointer"} fontWeight={"bold"}>
              Login
            </Text>
          </Link>
          <Link href="/auth/signup">
            <Buttons>Sign Up</Buttons>
          </Link>
        </Box>
      </Flex>
    </ContainerLayout>
  );
};
export default Header;
