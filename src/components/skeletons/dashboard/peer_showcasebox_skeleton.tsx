import React from "react";
import {
  Skeleton,
  Box,
  Flex,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
const PeerSkeletonLoader = () => {
  return (
    <div>
      <Box
        //   h={["450.242px"]}
        borderRadius={"10px"}
        w={["90%", "90%", "250px"]}
        bg={"#212121"}
        p={"1em"}
        mx={["auto", "", "0"]}>
        <Skeleton
          borderRadius={"8px"}
          px=".7em"
          h={"150px"}
          w={"100%"}
          bg={"black"}></Skeleton>

        <Flex my=".5em" gap={"1em"} alignItems="center">
          <SkeletonCircle width="50px" height="50px" />
          <Skeleton height="20px" width="60%" />
        </Flex>

        <Box my={"1em"} gap=".5em" alignItems="center">
          <SkeletonText height="30px" />
        </Box>

        <Box mt="2em">
          <Skeleton height="40px" width={"100%"} />
        </Box>
      </Box>
    </div>
  );
};

export default PeerSkeletonLoader;
