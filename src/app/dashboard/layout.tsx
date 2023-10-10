"use client";
import DashboardHeader from "@/layouts/dashboard/dashboardHeader";
import DashboardSidebar from "@/layouts/dashboard/dashboardSidebar";
import { Box, Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box top={0} left={0} right={0}>
        <DashboardHeader />
      </Box>
      <Flex py={"1em"}>
        {/* <Box
        top={0}
        left={0}
        mx={"auto"}
        px={"4em"}ss
        bottom={0}
        w={"350px"}
        display={["none", "none", "block"]}>
        <DashboardSidebar />
      </Box> */}
        <Container
          maxW={["100%", "70%", "70%"]}
          overflowY="auto"
          height="100vh"
          mx={"auto"}
          py={"2em"}>
          <Box w={"100%"}>{children}</Box>
        </Container>
      </Flex>
    </>
  );
};

export default Layout;
