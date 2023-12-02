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
import IsLoadingDatas from "@/components/atom/loading_data";
import IsErrorLoadingData from "@/components/atom/errors/errorLoading";
import { convertDistance, getPreciseDistance } from "geolib";

const MarketplaceSwap = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  const getData = () => {
    return axiosInstance("/marketplace/get_all_swap_listings", {
      headers: {
        Authorization: `Bearer ${AUTH_COOKIE}`,
      },
    });
  };

  const { data, isError, isLoading, isPending } = useQuery({
    queryKey: ["details"],
    queryFn: getData,
  });

  if (isPending) return <IsLoadingDatas />;

  if (isError) return <IsErrorLoadingData />;

  const retrivedData = data?.data?.data;

  const calculateDistance = getPreciseDistance(
    { latitude: 51.5103, longitude: 7.49347 },
    { latitude: "51° 31' N", longitude: "7° 28' E" }
  );

  const getDistanceInMiles = convertDistance(calculateDistance, "mi").toFixed(
    2
  );

  const displayLocation = `${getDistanceInMiles} m away`;

  return (
    <>
      <Box
        mb={"2em"}
        display="flex"
        alignItems="center"
        justifyContent={"space-between"}>
        <Text fontWeight="bold" fontSize={["20px", "21px", "25px"]}>
          P2P Marketplace
        </Text>

        <Link href="/dashboard/create/swap">
          <Buttons radius="10px">List Item</Buttons>
        </Link>
      </Box>
      <Box display="flex" flexWrap={"wrap"} gap={["1em", "2em"]}>
        {retrivedData && retrivedData.length > 0 ? (
          <>
            {Array.isArray(retrivedData) && (
              <>
                {retrivedData?.map((item, key: number) => {
                  return (
                    <Fragment key={key}>
                      <Suspense fallback={<PeerSkeletonLoader />}>
                        <BookShowcaseBox
                          username={item?.user?.firstName}
                          genre={item?.genre}
                          title={item?.title}
                          author={item?.author}
                          profileimage=""
                          bookimage={item?.image}
                          action={() => alert(0)}
                          view={onOpen}
                          location={displayLocation}
                        />
                      </Suspense>

                      <DrawerContainer
                        title="Book Title"
                        size={["full", "md"]}
                        isOpen={isOpen}
                        onClose={onClose}>
                        <PreviewMarketplaceData
                          title={item?.title}
                          description={item?.description}
                          image={item?.image}
                          ISBN={item?.isbn}
                          genre={item?.genre}
                          condition={item?.condition}
                          owner={item?.user?.firstName}
                          postedAt={item?.createdAt}
                          locationDistance={displayLocation}
                        />
                      </DrawerContainer>
                    </Fragment>
                  );
                })}
              </>
            )}
          </>
        ) : (
          <Text textAlign={"center"}>No Data Found</Text>
        )}
      </Box>
    </>
  );
};

export default MarketplaceSwap;
