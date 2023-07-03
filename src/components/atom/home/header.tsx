"use client";
import { Box, Button, Flex } from "@chakra-ui/react";
import { Logo } from "../icons/logo";
import ContainerLayout from "@/components/templates/home/layouts/container/containerLayout";
import Buttons from "../button/buttons";

const Header = () => {
  return (
    <ContainerLayout>
      <Flex py={"1em"} justify={"space-between"}>
        <Box>
          <Logo />
        </Box>

        <Box>
          <Buttons>Join Waitlist</Buttons>
        </Box>
      </Flex>
    </ContainerLayout>
  );
};
export default Header;
