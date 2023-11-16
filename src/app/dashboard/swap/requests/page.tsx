"use client";
import BookShowcaseBox from "@/components/molecules/dashboard/marketplace/swapBox";
import React, { Fragment, Suspense } from "react";
import { Box, Text, Flex, Avatar, useDisclosure } from "@chakra-ui/react";
import DrawerContainer from "@/layouts/popups/appDrawerLayout";
import PreviewMarketplaceData from "@/components/templates/dashboard/marketplace/preview_marketplacedata";
import PeerSkeletonLoader from "@/components/skeletons/dashboard/peer_showcasebox_skeleton";
import Buttons from "@/components/atom/button/buttons";
import Link from "next/link";
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
        <Text fontWeight="bold" fontSize={["18px", "19px", "22px"]}>
          Swap Requests
        </Text>

        {/* <Link href="/dashboard/create/swap">
          <Buttons radius="10px">List Item</Buttons>
        </Link> */}
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
                      </Suspense>

                      <DrawerContainer
                        title="Book Title"
                        size={["full", "md"]}
                        isOpen={isOpen}
                        onClose={onClose}>
                        <ViewSwapRequest
                          title={item?.title}
                          description={item?.description}
                          image={item?.image}
                          genre={item?.genre}
                          owner={item?.user?.firstName}
                          postedAt={item?.createdAt}
                        />
                      </DrawerContainer>
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
