import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { FcPackage } from "react-icons/fc";
import Link from "next/link";
const NoSwapedItem = () => {
  return (
    <Box
      h={"50vh"}
      w="100%"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      gap="1em"
      flexDir={"column"}>
      <Box>
        <FcPackage size="4em" />
      </Box>
      <Box>You havnt made any swap yet</Box>
      <Link href="/dashboard/marketplace">
        <Button>Go to Marketplace</Button>
      </Link>
    </Box>
  );
};

export default NoSwapedItem;
