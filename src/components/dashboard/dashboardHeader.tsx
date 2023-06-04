"use client";

import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "../micro/logo";
import { IoIosNotificationsOutline } from "react-icons/io";
const DashboardHeader = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      px={"2em"}
      py={"1.2em"}>
      <Box>
        <Logo />
      </Box>

      <Box>
        <IoIosNotificationsOutline size={"1.5em"} />
      </Box>
    </Flex>
  );
};
export default DashboardHeader;
