"use client";
import React, { FC } from "react";
import {
  Box,
  Badge,
  Text,
  Flex,
  Avatar,
  Button,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import ModalContainer from "@/layouts/popups/modalLayout";
import Buttons from "@/components/atom/button/buttons";
import { useMutation } from "@tanstack/react-query";
interface IBookShowCaseProps {
  action: () => void;
  view: () => void;
  title: string;
  author: string;
  username: string;
  profileimage: string;
  bookimage: string;
  genre: string;
}

const BookShowcaseBox: FC<IBookShowCaseProps> = ({
  action,
  view,
  title,
  profileimage,
  genre,
  bookimage,
  username,
  author,
}: IBookShowCaseProps) => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  //handle swap mutation
  // const { data } = useMutation({

  // });

  return (
    <Box
      //   h={["450.242px"]}
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
          {/* <Badge
            my={"1em"}
            px={"0.6em"}
            py={"0.1em"}
            bg={"brand.primary"}
            color={"#fff"}
            borderRadius={"md"}>
            Fiction
          </Badge> */}
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

      <ModalContainer isOpen={isOpen} onClose={onClose}>
        <form>
          <Textarea placeholder="Add a message to owner" />
          <Buttons my="10px" borderRadius={"10px"} w="100%">
            Send Request
          </Buttons>
        </form>
      </ModalContainer>
    </Box>
  );
};

export default BookShowcaseBox;
