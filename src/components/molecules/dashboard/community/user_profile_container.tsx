import React from "react";
import { Box, Text, Avatar, Flex } from "@chakra-ui/react";

const UserProfileTop = () => {
  return (
    <Box>
      <Box
        w={"100%"}
        cursor={"pointer"}
        p={".5em"}
        bg={"dark.10"}
        borderRadius={"50px"}
        gap="1em"
        alignItems={"center"}
        display="flex"
        justifyContent={"space-between"}>
        <Box display="flex" gap=".5em" alignItems="center">
          <Avatar name="SO" />
          <Text fontSize={"17px"}>Make contribution</Text>
        </Box>

        <Box
          width="50px"
          bg={"dark.20"}
          height="50px"
          borderRadius={"50%"}
          display="flex"
          alignItems="center"
          justifyContent={"center"}>
          <Text fontSize="30px">+</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfileTop;
