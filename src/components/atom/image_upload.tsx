import React, { FC } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { FcAddImage } from "react-icons/fc";
// import { FcEmptyTrash } from "react-icons/fc";
import { filesize } from "filesize";
import { FcImageFile } from "react-icons/fc";

const ImageUpload = () => {
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

type SelectedUpload = {
  name: string;
  size: number;
};

const SelectedUpload: FC<SelectedUpload> = ({ name, size }) => {
  const fileSize = filesize(size);
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
        <Box
          borderRadius={"5px"}
          h="60px"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w="70px"
          bg="#2f2f2f">
          <FcImageFile size="2em" />
        </Box>
        <Box>
          <Text>{name}</Text>
          <Text fontSize={"12px"}>{fileSize}</Text>
        </Box>
      </Box>

      {/* <Box cursor={"pointer"}>
        <FcEmptyTrash size="2em" />
      </Box> */}
    </Flex>
  );
};

export { ImageUpload, SelectedUpload };
