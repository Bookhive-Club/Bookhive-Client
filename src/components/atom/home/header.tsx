"use client";
import { Box, Text, Flex, useDisclosure } from "@chakra-ui/react";
import { Logo } from "../icons/logo";
import ContainerLayout from "@/layouts/container/containerLayout";
import Buttons from "../button/buttons";
import Link from "next/link";
import ModalContainer from "@/layouts/popups/modalLayout";
import AccountTypeUI from "@/components/molecules/account_type";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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

          <Buttons onClick={onOpen}> Sign Up</Buttons>
        </Box>
      </Flex>
      <ModalContainer isOpen={isOpen} onClose={onClose}>
        <AccountTypeUI />
      </ModalContainer>
    </ContainerLayout>
  );
};
export default Header;
