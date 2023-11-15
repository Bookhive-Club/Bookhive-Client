import React, { FC, Fragment } from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import Buttons from "@/components/atom/button/buttons";
import { MdLocationOn } from "react-icons/md";

enum Status {
  new,
  old,
}

interface ViewSwapRequest<T> {
  image: string;
  title?: string;
  owner: string;
  description: string;
  genre: string;
  condition: Status;
  // location: string;
  ISBN: number;
  postedAt?: T;
}

interface Details {
  name: string;
  value: string | number;
}

const ViewSwapRequest: FC<ViewSwapRequest<Date | string | number>> = ({
  image,
  title,
  owner,
  condition,
  // location,
  genre,
  description,
  ISBN,
  // postedAt,
}) => {
  const details: Details[] = [
    {
      name: "Condition",
      value: condition,
    },
    {
      name: "Genre",
      value: genre,
    },
    {
      name: "ISN",
      value: ISBN,
    },
  ];

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

        <Text my="1em">{description}</Text>

        <Box my="1em">
          <Text fontWeight="semibold">Details</Text>

          <Flex gap="1em" flexWrap={["wrap", "wrap", "nowrap"]}>
            {details.map((_, key) => (
              <Fragment key={key}>
                <Box
                  bg="dark.30"
                  w="150px"
                  borderRadius={"10px"}
                  px="1em"
                  py="1em">
                  {_.name}: {_.value}
                </Box>
              </Fragment>
            ))}
          </Flex>

          <Box display="flex" mt={"2em"} alignItems={"center"} gap="1em">
            <MdLocationOn /> Lagos, Nigeria
          </Box>
        </Box>

        <Box display={"flex "} gap={"1em"}>
          <Buttons radius="10px" w={"100%"}>
            Accept Request
          </Buttons>

          <Buttons radius="10px" w={"100%"}>
            Reject Request
          </Buttons>
        </Box>
      </Box>
    </Box>
  );
};

export default ViewSwapRequest;
