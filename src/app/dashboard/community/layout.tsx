import React, { ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box w={["100%", "100%", "800px"]} mx={"auto"}>
      <Text fontWeight={"semibold "} fontSize={["20px", "20px", "25px"]}>
        Community
      </Text>
      <Box my="1em">{children}</Box>
    </Box>
  );
};

export default Layout;
