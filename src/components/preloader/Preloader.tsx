// "use client";
"use client";
import React from "react";
import { ChakraProvider, theme, VStack } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

interface Props {}

const Preloader = (props: Props) => {
  return (
    <ChakraProvider theme={theme}>
      <VStack
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
        bg="linear-gradient(#172E22, #191919)"
        // bg="linear-gradient(98.88deg, #0dba63 6.27%, #107844 96.4%)"
        backdropBlur="blur(127px)"
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="9999">
        <Spinner
          thickness="4px"
          speed="0.65s"
          // emptyColor=""
          color="#0DBA63"
          size="xl"
        />
      </VStack>
    </ChakraProvider>
    // <ChakraProvider>
    //   <Progress color="#0DBA63" size="xl" isIndeterminate />
    // </ChakraProvider>
  );
};

export default Preloader;
