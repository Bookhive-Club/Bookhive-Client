import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { FcShop, FcPortraitMode } from "react-icons/fc";
import Link from "next/link";

const AccountTypeUI = () => {
  return (
    <Box py="1em">
      <Text mb="1.5em" fontWeight="semibold" fontSize={"20px"}>
        Create account as
      </Text>
      <Link href="/auth/signup">
        <Box
          bg="#0000000d"
          display={"flex"}
          alignItems={"center"}
          gap=".5em"
          p=".6em "
          cursor={"pointer"}
          borderRadius={"15px"}>
          <Box>
            <FcPortraitMode size="45px" />
          </Box>
          <Box>
            <Text>User</Text>
          </Box>
        </Box>
      </Link>

      <Box
        bg="#0000000d"
        display={"flex"}
        alignItems={"center"}
        gap=".5em"
        p=".6em "
        cursor={""}
        borderRadius={"15px"}
        my="1em">
        <Box>
          <FcShop size="45px" />
        </Box>
        <Box>
          <Text>User</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AccountTypeUI;
