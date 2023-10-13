import React from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { FcPackage } from "react-icons/fc";

const NoDataFound = () => {
  return (
    <Box w={"100%"} display={"flex"} justifyContent={"center"} mx={"auto"}>
      <Box>
        <FcPackage size="5em" />
        <Text color="brand.200">No Item Yet</Text>
      </Box>
    </Box>
  );
};

export default NoDataFound;
