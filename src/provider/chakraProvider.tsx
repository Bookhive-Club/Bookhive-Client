"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { FC, ReactNode } from "react";
import { theme } from "@/theme/theme";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PersistGate } from "redux-persist/integration/react";
import TanstackProvider from "./tanstackProvider";

interface IWrapper {
  children: ReactNode;
}

const ProviderWrapper: FC<IWrapper> = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CacheProvider>
          <ChakraProvider theme={theme}>
            <TanstackProvider>
              {children}
              <ReactQueryDevtools />
            </TanstackProvider>
          </ChakraProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
};

export default ProviderWrapper;
