"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { FC, ReactNode, cache } from "react";
import { theme } from "@/theme/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
interface IWrapper {
  children: ReactNode;
}
const ChakraWrapper: FC<IWrapper> = ({ children }) => {
  return (
    <Provider store={store}>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </Provider>
  );
};

export default ChakraWrapper;
