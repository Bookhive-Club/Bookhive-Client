import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
const Page = () => {
  return (
    <div>
      <Flex>
        <Text fontSize={["16px"]} fontWeight={"medium"}>
          Requests
        </Text>
      </Flex>

      <Box my="2em"></Box>
    </div>
  );
};

export default Page;
