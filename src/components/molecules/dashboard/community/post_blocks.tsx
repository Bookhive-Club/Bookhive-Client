import React, { FC } from "react";
import { Box, Text, Avatar, Flex } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import { formatDistanceToNow, parseISO } from "date-fns";

interface ContentDetails {
  name: string;
  date?: string;
  content: string;
}

const ContentPostedBlocks: FC<ContentDetails> = ({ name, date, content }) => {
  //@ts-ignore
  const parseDate = parseISO(date);
  return (
    <Box borderBottom={"1px solid #3636368a"} py={"2.5em"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box display="flex" gap="1em" alignItems="center">
          <Avatar name="Obiabo Immanuel" />
          <Box>
            <Text>{name}</Text>
            <Text>
              {formatDistanceToNow(parseDate, { includeSeconds: true })}{" "}
            </Text>
          </Box>
        </Box>
        <Box cursor={"pointer"}>
          <FiMoreVertical />
        </Box>
      </Flex>

      <Box my="1.7em" width={"85%"} mx="auto">
        <Text>{content}</Text>
      </Box>
    </Box>
  );
};

export default ContentPostedBlocks;
