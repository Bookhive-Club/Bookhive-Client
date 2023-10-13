"use client";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import BookDetailHolder from "@/components/molecules/bookDefailtholder";

const ReadingList = () => {
  return (
    <Box>
      <Text fontWeight={"bold"} fontSize={["25px", "30px"]}>
        Obiabos List
      </Text>

      <Box my={"2em"}>
        <BookDetailHolder />
      </Box>
    </Box>
  );
};

export default ReadingList;
