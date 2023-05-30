"use client";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Logo } from "../micro/logo";
import ContainerLayout from "@/layouts/containerLayout";
import Buttons from "../micro/buttons";

const Header = () => {
  return (
    <ContainerLayout>
      <Flex py={"1em"} justify={"space-between"}>
        <Box>
          <Logo />
        </Box>

        <Box>{/* <Buttons>Join Waitlist</Buttons> */}</Box>
      </Flex>
    </ContainerLayout>
  );
};
export default Header;
