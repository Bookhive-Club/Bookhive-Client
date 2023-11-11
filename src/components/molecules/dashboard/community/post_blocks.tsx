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

const ContentPostedBlocks: FC<ContentDetails> = ({
  name,
  date,
  content,
  status,
}) => {
  //@ts-ignore
  const parseDate = parseISO(date);

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

  return (
    <Box borderBottom={"1px solid #3636368a"} py={"2.5em"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box display="flex" gap="1em" alignItems="center">
          <Avatar name="Obiabo Immanuel" />
          <Box>
            <Text>{name}</Text>
            <Box bg={statusBg} borderRadius={"15px"} py={"5px"} px="10px">
              <Text color={statusColor}> {status}📗 </Text>
            </Box>
          </Box>
        </Box>
        <Box cursor={"pointer"}>
          {/* <FiMoreVertical /> */}
          {formatDistanceToNow(parseDate, { includeSeconds: true })}{" "}
        </Box>
      </Flex>

      {/* <Box>Is Reading</Box> */}

      <Box my="1.7em" width={"85%"} mx="auto">
        <Text>{content}</Text>
      </Box>
    </Box>
  );
};

export default ContentPostedBlocks;
