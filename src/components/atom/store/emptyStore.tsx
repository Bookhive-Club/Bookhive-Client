import { Box, Button, useToast } from "@chakra-ui/react";
import React from "react";
import { FcShop } from "react-icons/fc";

type StoreFront = {
  content?: string;
  button?: boolean;
};

const EmptyStore = ({ content, button }: StoreFront) => {
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
      <Box>{content ? content : "You dont have any store yet"}</Box>
      {/* {!button && <Button>Create Store</Button>} */}
    </Box>
  );
};

export default EmptyStore;
