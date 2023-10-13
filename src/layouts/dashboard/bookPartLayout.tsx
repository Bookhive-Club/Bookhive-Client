"use client";
import React, { FC, ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react";

interface IBookProps {
  children: ReactNode;
  title: string;
}

const BookPartLayout: FC<IBookProps> = ({ children, title }) => {
  return (
    <>
      <Box bg={"#191919"} p={"2em"}>
        <Text fontSize={["20px", "20px", "25px"]} fontWeight={600}>
          {title}
        </Text>
      </Box>

      <Box py={"2em"}>{children}</Box>
    </>
  );
};

export default BookPartLayout;
