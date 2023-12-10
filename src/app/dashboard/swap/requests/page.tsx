"use client";

import React, { Fragment, Suspense } from "react";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import DrawerContainer from "@/layouts/popups/appDrawerLayout";
import PeerSkeletonLoader from "@/components/skeletons/dashboard/peer_showcasebox_skeleton";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";
import { AUTH_COOKIE } from "@/constants";
import RequestBox from "@/components/molecules/dashboard/requestBox";
import ViewSwapRequest from "@/components/templates/dashboard/view_wap_request";
import NoDataFound from "@/components/atom/errors/noDataFound";

const Page = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const getData = () =>
    axiosInstance("/swap/requests", {
      headers: {
        Authorization: `Bearer ${AUTH_COOKIE}`,
      },
    });

  const { data, isError, isLoading, isPending } = useQuery({
    queryKey: ["details"],
    queryFn: getData,
  });

  const retrivedData = data?.data?.data;

  return (
    <>
      <Box
        mb={"2em"}
        display="flex"
        alignItems="center"
        justifyContent={"space-between"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap=".4em"
          w="fit-content"
          h="fit-content">
          <Text fontWeight="bold" fontSize={["18px", "19px", "22px"]}>
            My Requests
          </Text>

          {retrivedData && (
            <Text
              fontWeight={"bold"}
              py="0.2em"
              rounded="2em"
              px="1em"
              bg="brand.primary">
              {retrivedData?.length}
            </Text>
          )}
        </Box>
      </Box>
      <Box display="flex" flexWrap={"wrap"} gap={["1em", "2em"]}>
        {/* check if data is empty  */}
        {retrivedData?.length === 0 ? (
          <NoDataFound content="No Request" />
        ) : (
          <>
            {Array.isArray(retrivedData) && (
              <>
                {retrivedData?.map((item, key: number) => {
                  return (
                    <Fragment key={key}>
                      <Suspense fallback={<PeerSkeletonLoader />}>
                        <RequestBox
                          username={item?.user?.firstName}
                          genre={item?.genre}
                          title={item?.title}
                          author={item?.author}
                          profileimage=""
                          bookimage={item?.image}
                          action={() => alert(0)}
                          view={onOpen}
                        />

                        <DrawerContainer
                          title="Book Title"
                          size={["full", "md"]}
                          isOpen={isOpen}
                          onClose={onClose}>
                          <ViewSwapRequest
                            title={item?.title}
                            description={item?.description}
                            image={item?.image}
                            message={item?.message}
                            owner={item?.user?.firstName}
                            date={item?.createdAt}
                          />
                        </DrawerContainer>
                      </Suspense>
                    </Fragment>
                  );
                })}
              </>
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default Page;
