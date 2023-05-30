"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { FC, ReactNode, cache } from "react";
import { theme } from "@/theme/theme";
interface IWrapper {
  children: ReactNode;
}
const ChakraWrapper: FC<IWrapper> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default ChakraWrapper;
