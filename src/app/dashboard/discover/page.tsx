"use client";
import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { FcGlobe } from "react-icons/fc";
import DiscoverContentBox from "@/components/molecules/dashboard/discover_content_box";
import EmptyStore from "@/components/atom/store/emptyStore";

const ReadingList = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" flexWrap={"wrap"}>
        <Text fontWeight={"bold"} fontSize={["25px", "30px"]}>
          Book stores around you
        </Text>
        {/* Show bookstores in map */}

        <Box
          display="flex"
          alignItems={"center"}
          gap=".5em"
          width={"fit-content"}
          px="1em"
          py=".5em"
          borderRadius="20px"
          cursor={"pointer"}
          bg="black">
          <Text>View Map </Text>
          <FcGlobe size="2em" />
        </Box>
      </Flex>

      <Box my={"2em"}>
        {/* <DiscoverContentBox /> */}
        <EmptyStore content="There are no stores yet" button={true} />
      </Box>
    </Box>
  );
};

export default ReadingList;
