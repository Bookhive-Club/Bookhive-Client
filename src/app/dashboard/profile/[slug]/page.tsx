import { Box, Avatar, Text, Flex } from "@chakra-ui/react";
import React from "react";

const ProfilePage = () => {
  return (
    <Box
      bg={"dark.10"}
      mx={"auto"}
      borderRadius="10px"
      w={["100%", "100%", "700px"]}
      py={"4em"}
      px={"1.5em"}>
      <Box display="flex" justifyContent={"center"}>
        <Avatar size="xl" />
      </Box>
    </Box>
  );
};

export default ProfilePage;
