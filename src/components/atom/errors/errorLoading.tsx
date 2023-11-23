import React from "react";
import { Box, Text } from "@chakra-ui/react";

const IsErrorLoadingData = () => {
  return (
    <Box
      h="500px"
      w="100%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}>
      <Text>Sorry there was an issue loading datas</Text>
    </Box>
  );
};

export default IsErrorLoadingData;
