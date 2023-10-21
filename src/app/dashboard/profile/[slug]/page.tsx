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
      <Box
        display="flex"
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}>
        <Avatar size="xl" name="Emmanuel Obiabo" />
        <Text my=".6em" fontWeight="medium" fontSize={["20px", "22px"]}>
          Emmanuel Obiabo
        </Text>
      </Box>
    </Box>
  );
};

export default ProfilePage;
