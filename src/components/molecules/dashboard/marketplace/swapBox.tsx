"use client";
import React, { FC, Fragment } from "react";
import { Box, Badge, Text, Flex, Avatar, Button } from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";

interface IBookShowCaseProps {
  action: () => void;
  view: () => void;
}

const BookShowcaseBox: FC<IBookShowCaseProps> = ({
  action,
  view,
}: IBookShowCaseProps) => {
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
        bg={"black"}>
        <Flex justifyContent="flex-end" alignItems={"end"}>
          <Badge
            my={"1em"}
            px={"0.6em"}
            py={"0.1em"}
            bg={"brand.primary"}
            color={"#fff"}
            borderRadius={"md"}>
            Fiction
          </Badge>
        </Flex>
      </Box>

      <Box my=".5em">
        <Text
          fontSize={["18px"]}
          fontWeight={600}
          color={"rgba(255, 255, 255, 0.70)"}>
          The Crying Book
        </Text>

        <Text color={"brand.grayed"}>Lieather Christel</Text>
      </Box>

      <Flex my={"1em"} gap=".5em" alignItems="center">
        <Avatar size={"sm"} />
        <Box>
          <Text>Obiabo </Text>
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
        <Button w={"100%"} bg={"brand.primary"} onClick={action}>
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
    </Box>
  );
};

export default BookShowcaseBox;
