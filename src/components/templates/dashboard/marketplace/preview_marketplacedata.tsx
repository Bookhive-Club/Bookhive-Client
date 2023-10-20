import React, { FC, Fragment } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Buttons from "@/components/atom/button/buttons";
import { MdLocationOn } from "react-icons/md";

enum Status {
  new,
  old,
}

interface MarketplaceData<T> {
  image: string;
  title?: string;
  owner: string;
  condition: Status;
  location: string;
  ISBN: number;
  postedAt: T;
}

interface Details {
  name: string;
  value: string | number;
}

const PreviewMarketplaceData: FC<MarketplaceData<Date | string | number>> = ({
  image,
  title,
  owner,
  condition,
  location,
  ISBN,
  postedAt,
}) => {
  const details: Details[] = [
    {
      name: "Condition",
      value: condition,
    },
    {
      name: "ISN",
      value: ISBN,
    },
    {
      name: "ISN",
      value: ISBN,
    },
  ];

  return (
    <Box>
      <Box bg={"black"} w={"100%"} borderRadius={"10px"} height="250px"></Box>

      <Box my={"1em"}>
        <Text fontSize={"1.5em"} fontWeight="semibold">
          The Crying Fish
        </Text>

        <Text my="1em">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          facilis harum sit iusto doloribus ducimus vitae numquam iure,
          laudantium odio incidunt error quas eligendi consectetur beatae omnis
          vero doloremque quisquam.
        </Text>

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

        <Box>
          <Buttons radius="10px" w={"100%"}>
            Send Swap Request
          </Buttons>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewMarketplaceData;
