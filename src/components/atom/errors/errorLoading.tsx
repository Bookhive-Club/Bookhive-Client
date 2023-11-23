import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const IsErrorLoadingData = () => {
  const router = useRouter();

  const reloadPage = () => router.refresh();
  return (
    <Box
      h="500px"
      w="100%"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}>
      <Box>
        <Text>Sorry there was an issue loading datas</Text>

        <center>
          <Button onClick={reloadPage}> Refresh</Button>
        </center>
      </Box>
    </Box>
  );
};

export default IsErrorLoadingData;
