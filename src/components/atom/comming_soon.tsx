import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { FcReading } from "react-icons/fc";

const CommingSoon = () => {
  return (
    <Box>
      <Flex justifyContent={"center"} my={"5em"}>
        <Box>
          <FcReading size={"8em"} />
          <Text>Comming Soon</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default CommingSoon;
