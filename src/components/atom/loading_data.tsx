import React, { FC } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";

type IsLoading = { content?: string };
const IsLoadingDatas: FC<IsLoading> = ({ content }) => {
  return (
    <Box
      h="500px"
      w="100%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}>
      <Box>
        <Spinner size="lg" colorScheme="brand.primary" />
        <Text my=".5em">{content ? content : "Loading..."}</Text>
      </Box>
    </Box>
  );
};

export default IsLoadingDatas;
