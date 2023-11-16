import React, { FC, ReactNode } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { FcPackage } from "react-icons/fc";

interface NoDataFound {
  icon?: ReactNode;
  content?: string;
}

const NoDataFound: FC<NoDataFound> = ({ icon, content }) => {
  return (
    <Box w={"100%"} display={"flex"} justifyContent={"center"} mx={"auto"}>
      <Box>
        {icon ? icon : <FcPackage size="5em" />}
        <Text color="brand.200">{content ? content : "No Item Yet"}</Text>
      </Box>
    </Box>
  );
};
export default NoDataFound;
