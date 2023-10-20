"use client";
import InputArea from "@/components/atom/form/inputArea";
import { Box, Text, Flex } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

interface ISettingsProps {
  children: ReactNode;
}

const SettingsLayout: FC<ISettingsProps> = ({ children }) => {
  return (
    <>
      <Flex gap="1em" justifyContent={"center"}>
        <Box
          bg={"#191919"}
          py={"2em"}
          px={["1em", "2em"]}
          w={["100%", "100%", "550px"]}>
          <Box my={"1.5em"}>{children}</Box>
        </Box>
      </Flex>
    </>
  );
};

export default SettingsLayout;
