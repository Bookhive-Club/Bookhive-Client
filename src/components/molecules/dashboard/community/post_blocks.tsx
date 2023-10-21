import React from "react";
import { Box, Text, Avatar, Flex } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";

const ContentPostedBlocks = () => {
  return (
    <Box borderBottom={"1px solid #3636368a"} py={"2.5em"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box display="flex" gap="1em" alignItems="center">
          <Avatar name="Obiabo Immanuel" />
          <Box>
            <Text>Sudo Whoami</Text>
            <Text>Tag 9hours ago</Text>
          </Box>
        </Box>
        <Box cursor={"pointer"}>
          <FiMoreVertical />
        </Box>
      </Flex>

      <Box my="1.7em" width={"85%"} mx="auto">
        <Text>
          Recently i build my first backend application using Node.js! I used
          Express.js and MongoDB to make a powerful e-commerce server. With
          simple GET and POST requests, users can easily add product info like
          names, descriptions, prices, and brands.
        </Text>
      </Box>
    </Box>
  );
};

export default ContentPostedBlocks;
