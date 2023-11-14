"use client";
import React, { Fragment } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import UserProfileTop from "@/components/molecules/dashboard/community/user_profile_container";
import ContentPostedBlocks from "@/components/molecules/dashboard/community/post_blocks";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";
import { AUTH_COOKIE } from "@/constants";

const CommunityPage = () => {
  const getData = () =>
    axiosInstance("/community/all_posts", {
      headers: {
        Authorization: `Bearer ${AUTH_COOKIE}`,
      },
    });

  const { data, isError, isLoading, isFetching } = useQuery({
    queryKey: ["details"],
    queryFn: getData,
    refetchInterval: 3000,
  });

  if (isLoading) {
    return <>Datas are loading</>;
  }

  const retrivedData = data?.data?.data;

  return (
    <Box pos={"relative"}>
      <Box>
        <UserProfileTop />
      </Box>
      <Box my={"2em"}>
        <Flex flexDir="column" gap="2em">
          {Array.isArray(retrivedData) && (
            <>
              {retrivedData?.map((_: any, index: number) => {
                const user = _.user;
                const status = _?.status;
                return (
                  <Fragment key={index}>
                    <ContentPostedBlocks
                      content={_?.description}
                      status={status}
                      date={_?.createdAt}
                      name={`${user?.firstName} ${user?.lastName}`}
                    />
                  </Fragment>
                );
              })}
            </>
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default CommunityPage;
