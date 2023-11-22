import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { FcAddImage } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";

const ImageUpload = () => {
  const data = "item";
  return (
    <Flex
      justifyContent={"center"}
      h={["", "", "", "40vh"]}
      alignItems={"center"}
      borderRadius={"xl"}
      py="1.5em"
      style={{
        border: "1px dashed white",
      }}>
      <Box textAlign={"center"} cursor={"pointer"}>
        <FcAddImage size="4em" />
        <Text my="1em">Upload Image</Text>
      </Box>
    </Flex>
  );
};

const SelectedUpload = () => {
  return (
    <Flex
      my="1em"
      justifyContent={"space-bewteen"}
      alignItems={"center"}
      justifyItems={"space-between"}
      gap="1em"
      bg="#212121"
      w="100%"
      p="1em"
      borderRadius={"10px"}>
      <Box display={"flex"} alignItems={"center"} gap=".5em">
        <Box borderRadius={"5px"} h="50px" w="50px" bg="red"></Box>
        <Box>
          <Text>Filename</Text>
          <Text fontSize={"12px"}>File Size</Text>
        </Box>
      </Box>

      <Box>
        <FcEmptyTrash size="2em" />
      </Box>
    </Flex>
  );
};

export { ImageUpload, SelectedUpload };
