import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import { AUTH_COOKIE } from "@/constants";
import { axiosInstance } from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const getData = async () => {
    const response = await axiosInstance("/marketplace/get_all_swap_listings", {
      headers: {
        Authorization: `Bearer ${AUTH_COOKIE}`,
      },
    });
    return response.data;
  };

  // Use the useQuery hook
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["swap_request"],
    queryFn: getData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <Flex>
        <Text fontSize={["20px"]} fontWeight={"bold"}>
          All Requests
        </Text>
      </Flex>

      <Box my="2em"></Box>
    </div>
  );
};

export default Page;
