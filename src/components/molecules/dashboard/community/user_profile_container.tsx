import React, { Fragment } from "react";
import { Box, Text, Avatar, Flex, useDisclosure } from "@chakra-ui/react";
import ModalContainer from "@/layouts/popups/modalLayout";
import Buttons from "@/components/atom/button/buttons";
import {
  FcReading,
  FcOk,
  FcApproval,
  FcBookmark,
  FcAddImage,
} from "react-icons/fc";

const UserProfileTop = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const actionStatus = [
    {
      name: " Read",
      icon: <FcApproval size="1.5em" />,
      action: () => {},
    },
    {
      name: "Reading",
      icon: <FcReading size="1.5em" />,
      action: () => {},
    },
    {
      name: "To Read",
      icon: <FcBookmark size="1.5em" />,
      action: () => {},
    },
  ];
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
        justifyContent={"space-between"}
        onClick={onOpen}>
        <Box display="flex" gap=".5em" alignItems="center">
          <Avatar name="SO" />
          <Text fontSize={"17px"}>Share Content</Text>
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

      <ModalContainer
        size={["", "", "xl"]}
        isOpen={isOpen}
        onClose={onClose}
        title="Create Post">
        <Box
          w="100%"
          h="150px"
          bg="dark.30"
          contentEditable={true}
          outline={"none"}
          p="1em"
          placeholder="What are you doing"></Box>

        <Box my="1em" display={"flex"} gap="1em" justifyContent={"center"}>
          {actionStatus.map(({ name, icon, action }, key) => {
            return (
              <Fragment key={key}>
                <Box
                  bg={"dark.30"}
                  w="90px"
                  h="75px"
                  gap="6px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDir="column"
                  cursor={"pointer"}
                  borderRadius={"10px"}>
                  {icon}
                  <Text>{name}</Text>
                </Box>
              </Fragment>
            );
          })}
        </Box>

        <Box
          my="1em"
          border={"1px  dashed gray"}
          borderRadius={"10px"}
          py="2em"
          px={"2em"}
          flexDirection={"column"}
          alignItems={"center"}
          display={"flex"}
          cursor={"pointer"}>
          <FcAddImage size="2em" />
          <Text>Upload Image</Text>
        </Box>
        <Buttons borderRadius={"10px"} py="10px" w="100%" my="1em" radius="0">
          Post
        </Buttons>
      </ModalContainer>
    </Box>
  );
};

export default UserProfileTop;
