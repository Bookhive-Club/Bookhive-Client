"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";
import { FC, ReactNode, cache } from "react";
import { theme } from "@/theme/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
interface IWrapper {
  children: ReactNode;
}

const queryClient = new QueryClient();
const ProviderWrapper: FC<IWrapper> = ({ children }) => {
  return (
    <Provider store={store}>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={true} />
          </QueryClientProvider>
        </ChakraProvider>
      </CacheProvider>
    </Provider>
  );
};

export default ProviderWrapper;
