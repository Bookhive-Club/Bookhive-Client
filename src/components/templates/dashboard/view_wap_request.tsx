import React, { FC, Fragment } from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import Buttons from "@/components/atom/button/buttons";
import { MdLocationOn } from "react-icons/md";

interface ViewSwapRequest<T> {
  image: string;
  title?: string;
  owner: string;
  description: string;
  genre: string;
  postedAt?: T;
}

const ViewSwapRequest: FC<ViewSwapRequest<Date | string | number>> = ({
  image,
  title,
  owner,
}) => {
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
            lore
          </Box>

          <Box display="flex" mt={"2em"} alignItems={"center"} gap="1em">
            <MdLocationOn /> Lagos, Nigeria
          </Box>
        </Box>

        <Box display={"flex "} gap={"1em"}>
          <Buttons radius="10px" w={"100%"} _hover={{}}>
            Accept Request
          </Buttons>

          <Buttons
            border={"1px solid red"}
            color="#fff"
            radius="10px"
            bg="red"
            w={"100%"}
            _hover={{
              background: "red",
              color: "white",
            }}>
            Reject Request
          </Buttons>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewSwapRequest;
