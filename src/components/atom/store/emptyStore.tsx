import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Buttons from "../button/buttons";
import { FcShop } from "react-icons/fc";
const EmptyStore = () => {
  return (
    <Box
      h={"50vh"}
      w="100%"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      gap="1em"
      flexDir={"column"}>
      <Box>
        <FcShop size="4em" />
      </Box>
      <Box>You dont have any store yet</Box>
      <Button>Create Store</Button>
    </Box>
  );
};

export default EmptyStore;
