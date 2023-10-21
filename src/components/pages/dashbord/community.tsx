"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import UserProfileTop from "@/components/molecules/dashboard/community/user_profile_container";
import ContentPostedBlocks from "@/components/molecules/dashboard/community/post_blocks";

const CommunityPage = () => {
  return (
    <Box pos={"relative"}>
      <Box>
        <UserProfileTop />
      </Box>
      <Box my={"2em"}>
        <Flex flexDir="column" gap="2em">
          {[1, 1, 1, 1].map((_, index) => (
            <Fragment key={index}>
              <ContentPostedBlocks />
            </Fragment>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default CommunityPage;
