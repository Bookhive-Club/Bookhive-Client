"use client";
import React, { ChangeEvent, FC, useState } from "react";
import {
  Box,
  Badge,
  Text,
  Flex,
  Avatar,
  Button,
  useDisclosure,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import ModalContainer from "@/layouts/popups/modalLayout";
import Buttons from "@/components/atom/button/buttons";
import { convertDistance, getPreciseDistance } from "geolib";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";
import { AUTH_COOKIE } from "@/constants";
import { AxiosError } from "axios";
interface IBookShowCaseProps {
  action: () => void;
  view: () => void;
  title: string;
  author: string;
  username: string;
  profileimage: string;
  bookimage: string;
  genre: string;
  location?: any;
  posterId: string;
  swapItemId: string;
  requesterId: string;
}

const BookShowcaseBox: FC<IBookShowCaseProps> = ({
  view,
  title,

  genre,
  bookimage,
  username,
  author,
  requesterId,
  location,
  posterId,
  swapItemId,
}: IBookShowCaseProps) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState<string>();
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [err, setErr] = useState<string>("");
  const toast = useToast();

  const payload = {
    message: message,
    swapItemId: swapItemId,
    requesterId: requesterId,
    posterId: posterId,
  };

  const sendRequest = useMutation({
    mutationFn: () => {
      return axiosInstance.post("/marketplace/send_swap_request", payload, {
        headers: {
          Authorization: `Bearer ${AUTH_COOKIE}`,
        },
      });
    },

    onSuccess: () => {
      toast({
        status: "success",
        title: "Request has been sent to user",
        position: "top",
      });

      setTimeout(() => {
        onClose();
      }, 1000);
    },

    onError: (err: AxiosError) => {
      //@ts-ignore
      const { data } = err?.response;
      toast({
        variant: "solid",
        status: "error",
        description: data?.message,
        position: "top",
      });
    },
  });

  const sendSwapRequest = () => sendRequest.mutate();

  const addMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    const charLength = value.length;
    setMessage(value);

    if (charLength < 10) {
      setErr("Message is too short");
      setIsDisabled(true);
    } else {
      setErr("");
      setIsDisabled(false);
    }
  };

  return (
    <Box
      borderRadius={"10px"}
      w={["90%", "90%", "250px"]}
      bg={"#212121"}
      p={"1em"}
      mx={["auto", "", "0"]}>
      <Box
        borderRadius={"8px"}
        px=".7em"
        h={"201.134px"}
        w={"100%"}
        bg={"black"}
        bgImage={bookimage}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat">
        <Flex justifyContent="flex-end" alignItems={"end"}>
          <Badge
            my={"1em"}
            px={"0.6em"}
            py={"0.1em"}
            bg={"brand.primary"}
            color={"#fff"}
            borderRadius={"md"}>
            {genre}
          </Badge>
        </Flex>
      </Box>

      <Box my=".5em">
        <Text
          fontSize={["18px"]}
          fontWeight={600}
          color={"rgba(255, 255, 255, 0.70)"}>
          {title}
        </Text>

        <Text color={"brand.grayed"}>{author}</Text>
      </Box>

      <Flex my={"1em"} gap=".5em" alignItems="center">
        <Avatar size={"sm"} />
        <Box>
          <Text>{username} </Text>
          <Text fontSize={"13px"} color={"gray.400"}>
            {location}
          </Text>
        </Box>
      </Flex>

      <Flex gap=".5em" alignItems={"center"}>
        <Button w={"100%"} bg={"brand.primary"} onClick={onOpen}>
          Send Request
        </Button>
        <Box
          bg={"dark.40"}
          borderRadius={"md"}
          height="fit-content"
          py=".8em"
          px={"1em"}
          width={"fit-content"}
          cursor="pointer"
          onClick={view}>
          <FaEye />
        </Box>
      </Flex>

      <ModalContainer isOpen={isOpen} onClose={onClose} title="Send Message">
        <form>
          <Textarea
            placeholder="Add a message for the owner"
            onChange={(e) => addMessage(e)}
          />

          {typeof message !== "undefined" ? (
            <>
              {message.length > 0 && (
                <>
                  {err && (
                    <Text mt=".5em" color="red">
                      {err}
                    </Text>
                  )}
                </>
              )}
            </>
          ) : (
            ""
          )}
          <Buttons
            my="10px"
            borderRadius={"10px"}
            w="100%"
            onClick={sendSwapRequest}
            isLoading={sendRequest.isPending ?? "Sending Request..."}
            isDisabled={isDisabled}>
            Send Request
          </Buttons>
        </form>
      </ModalContainer>
    </Box>
  );
};

export default BookShowcaseBox;
