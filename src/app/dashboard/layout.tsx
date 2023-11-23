"use client";
import isAuthenticated from "@/HOC/withAuth";
import DashboardHeader from "@/layouts/dashboard/dashboardHeader";
import DashboardSidebar from "@/layouts/dashboard/dashboardSidebar";
import { Box, Container, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box>
        <DashboardHeader />
      </Box>
      <Flex py={"1em"} my={"5em"}>
        <Container
          maxW={["100%", "85%", "85%", "80%"]}
          height="100vh"
          mx={"auto"}
          py={"2em"}>
          <Box w={"100%"}>{children}</Box>
        </Container>
      </Flex>
    </>
  );
};

//@ts-ignore
export default isAuthenticated(Layout);
