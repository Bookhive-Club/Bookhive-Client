import React, { FC, Fragment } from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import Buttons from "@/components/atom/button/buttons";
import { MdLocationOn } from "react-icons/md";
import { parseISO } from "date-fns";
import { FORMAT_TWITTER_DATE } from "@/constants";
interface ViewSwapRequest<T> {
  image: string;
  message?: string;
  owner: string;
  description: string;
  postedAt?: T;
  title: string;
  date: string;
}

const ViewSwapRequest: FC<ViewSwapRequest<Date | string | number>> = ({
  image,
  message,
  owner,
  title,
  date,
}) => {
  const parseDate = parseISO(date);
  const formatData = FORMAT_TWITTER_DATE(parseDate);

  return (
    <Box>
      <Box
        bg={"black"}
        w={"100%"}
        borderRadius={"10px"}
        height="250px"
        backgroundImage={image}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}></Box>

      <Box my={"1em"}>
        <Box mb=".9em" display="flex" gap="0.3em" alignItems={"center"}>
          <Avatar src={""} name={owner} />
          <Box>
            <Text>{owner}</Text>
            <Text></Text>
          </Box>
        </Box>

        <Text fontSize={"1.5em"} fontWeight="semibold">
          {title}
        </Text>

        <Box my="1em">
          <Text fontWeight="semibold">Message</Text>
          <Box my="1em" bg="#0000002b" p="1em" borderRadius={"lg"}>
            {message}
          </Box>

          <Box
            display="flex"
            justifyContent={"space-between"}
            mt={"2em"}
            alignItems={"center"}
            gap="1em">
            <Box display={"inline-flex"} alignItems="center" gap="0.5em">
              <MdLocationOn />
              <Text>Lagos, Nigeria</Text>
            </Box>

            <Text>{formatData} ago</Text>
          </Box>
        </Box>

        <Box display={"flex "} gap={"1em"}>
          <Buttons radius="10px" w={"100%"} _hover={{}}>
            Continue Chat
          </Buttons>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewSwapRequest;
