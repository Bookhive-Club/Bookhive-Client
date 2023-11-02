"use client";
import React, { Fragment, useState, useRef, RefObject } from "react";
import {
  Box,
  Text,
  Avatar,
  Input,
  FormLabel,
  useDisclosure,
  FormControl,
  useToast,
} from "@chakra-ui/react";
import ModalContainer from "@/layouts/popups/modalLayout";
import Buttons from "@/components/atom/button/buttons";
import { FcReading, FcApproval, FcBookmark, FcAddImage } from "react-icons/fc";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";

const imageUploader = (
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
);

const actionStatus = [
  {
    name: " Read",
    icon: <FcApproval size="1.5em" />,
    status: "Has read",
    action: () => {},
  },
  {
    name: "Reading",
    icon: <FcReading size="1.5em" />,
    status: "Is Currently Reading",
    action: () => {},
  },
  {
    name: "To Read",
    icon: <FcBookmark size="1.5em" />,
    status: "Wants to Read",
    action: () => {},
  },
];

const UserProfileTop = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isStatus, setStatus] = useState<string>("");
  const [contentData, setContentData] = useState<string | null>();
  const [fileObject, setFileObject] = useState();
  const toast = useToast();

  const editableRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  //handle image upload
  //@ts-ignore
  const uploadImage = (event) => {
    const file = event.target.files;
    console.log(file);
  };

  const createPost = () => {};

  const mutation = useMutation({
    mutationFn: (formData: any) => {
      return axiosInstance.post("/community/post", formData);
    },
    onSuccess: (response) => {
      //@ts-ignore
      const { message } = response?.data;

      toast({
        variant: "solid",
        status: "success",
        description: message,
        position: "top",
      });
    },
    onError: (err: any) => {
      const { data } = err?.response;
      toast({
        variant: "solid",
        status: "error",
        description: data?.message,
        position: "top",
      });
    },
  });

  const handleContent = () => {
    if (editableRef?.current) {
      //set content editable data
      setContentData(editableRef?.current?.textContent);
    }
  };

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
        {/* Content Editable part */}
        <Box
          ref={editableRef}
          w="100%"
          h="150px"
          bg="dark.30"
          contentEditable={true}
          outline={"none"}
          p="1em"
          onInput={handleContent}></Box>
        <Box my="1em" display={"flex"} gap="1em" justifyContent={"center"}>
          {actionStatus.map(({ name, icon, action, status }, key) => {
            const check_status =
              status === isStatus ? "brand.primary" : "dark.30";
            const updateStatus = () => setStatus(status);
            return (
              <Fragment key={key}>
                <Box
                  bg={check_status}
                  w="90px"
                  h="75px"
                  gap="6px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDir="column"
                  cursor={"pointer"}
                  borderRadius={"10px"}
                  onClick={updateStatus}>
                  {icon}
                  <Text>{name}</Text>
                </Box>
              </Fragment>
            );
          })}
        </Box>

        <FormControl>
          <FormLabel>{imageUploader}</FormLabel>
          <Input type="file" display={"none"} onChange={uploadImage} />
        </FormControl>
        <Buttons borderRadius={"10px"} py="10px" w="100%" my="1em" radius="0">
          Post
        </Buttons>
      </ModalContainer>
    </Box>
  );
};

export default UserProfileTop;
