import React, { FC } from "react";
import { Box, Text, Avatar, Flex } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import { formatDistanceToNow, parseISO } from "date-fns";

interface ContentDetails {
  name: string;
  date?: string;
  content: string;
  status?: string;
}

const formatTwitterDate = (date: any) => {
  const now = new Date();
  const diffInSeconds = (now.getTime() - date.getTime()) / 1000;

  if (diffInSeconds < 60) {
    return "Just now";
  } else if (diffInSeconds < 3600) {
    return Math.floor(diffInSeconds / 60) + "m";
  } else if (diffInSeconds < 86400) {
    return Math.floor(diffInSeconds / 3600) + "h";
  } else {
    return Math.floor(diffInSeconds / 86400) + "d";
  }
};

const ContentPostedBlocks: FC<ContentDetails> = ({
  name,
  date,
  content,
  status,
}) => {
  //@ts-ignore
  const parseDate = parseISO(date);
  const twitterDate = formatTwitterDate(parseDate);

  let statusBg, statusColor;

  if (status === "Is currently reading") {
    statusBg = "#ee4336";
    statusColor = "#fff";
  } else if (status === "Has read") {
    statusBg = "brand.primary";
    statusColor = "#fff";
  } else {
    statusBg = "#5422ff";
    statusColor = "#fff";
  }
  const datePosted = formatDistanceToNow(parseDate, { addSuffix: true });
  return (
    <Box borderBottom={"1px solid #3636368a"} py={"2.5em"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box display="flex" gap="1em" alignItems="center">
          <Avatar name="Obiabo Immanuel" />
          <Box>
            <Box display={"flex"} alignItems={"center"} gap=".5em">
              <Text>{name}</Text>
              <Text color={"gray"} fontSize={"14px"}>
                {twitterDate}
              </Text>
            </Box>
            <Box
              w={"fit-content"}
              mt=".3em"
              bg={statusBg}
              borderRadius={"15px"}
              py={"5px"}
              px="10px">
              <Text color={statusColor} fontSize="13.6px">
                {status}📗{" "}
              </Text>
            </Box>
          </Box>
        </Box>
        <Box cursor={"pointer"}>
          <FiMoreVertical />
        </Box>
      </Flex>

      {/* <Box>Is Reading</Box> */}

      <Box my="1.7em" width={"85%"} mx="auto">
        <Text>{content}</Text>

        <Box></Box>
      </Box>
    </Box>
  );
};

export default ContentPostedBlocks;
