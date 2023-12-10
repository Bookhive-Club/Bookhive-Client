import React, { FC, Fragment } from "react";
import { Box, Text, Flex, Avatar } from "@chakra-ui/react";
import Buttons from "@/components/atom/button/buttons";
import { MdLocationOn } from "react-icons/md";
import { FORMAT_TWITTER_DATE } from "@/constants";
import parseISO from "date-fns/parseISO";

enum Status {
  new,
  old,
}

interface MarketplaceData<T> {
  image: string | undefined;
  title?: string;
  owner: string;
  description: string;
  genre: string;
  condition: Status;
  locationDistance?: any;
  ISBN: number;
  postedAt?: T;
}

interface Details {
  name: string;
  value?: string | number;
}

const PreviewMarketplaceData: FC<MarketplaceData<Date | string>> = ({
  image,
  owner,
  condition,
  genre,
  description,
  ISBN,
  postedAt,
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
        w={"100%"}
        borderRadius={"10px"}
        height="250px"
        backgroundImage={image}
        backgroundSize={"cover"}
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}></Box>

      <Box my={"1em"}>
        <Flex justifyContent={"space-between"}>
          <Box mb=".9em" display="flex" gap="0.3em" alignItems={"center"}>
            <Avatar src={""} name={owner} />
            <Box>
              <Text>{owner}</Text>
              {/* @ts-ignore */}
              <Text>{FORMAT_TWITTER_DATE(parseISO(postedAt))} ago</Text>
            </Box>
          </Box>

          <Text></Text>
        </Flex>
        {/* <Text fontSize={"1.5em"} fontWeight="semibold">
          {title}
        </Text> */}

        <Text my="1em">{description}</Text>

        <Box my="1em">
          <Text fontWeight="semibold">Details</Text>

          <Flex gap="1em" flexDirection={["column"]}>
            {details?.map((_, key) => (
              <Fragment key={key}>
                <Box
                  bg="dark.30"
                  // w="150px"
                  borderRadius={"10px"}
                  px="1em"
                  py="1em"
                  w="100%">
                  {_?.name}: {_?.value}
                </Box>
              </Fragment>
            ))}
          </Flex>

          {/* <Box display="flex" flexDir={"column"} mt={"2em"} gap=".2em">
            <Box display={"inline-flex"} gap=".3em" alignItems={"center"}>
              <MdLocationOn /> <Text>Lagos, Nigeria</Text>
            </Box>
            <Box>
              <Text fontSize={"13px"} color={"gray.400"}>
                {locationDistance}
              </Text>
            </Box>
          </Box> */}
        </Box>

        {/* <Box>
          <Buttons radius="10px" w={"100%"}>
            Send Swap Request
          </Buttons>
        </Box> */}
      </Box>
    </Box>
  );
};

export default PreviewMarketplaceData;
