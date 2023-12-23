//@ts-nocheck
"use client";
import BookShowcaseBox from "@/components/molecules/dashboard/marketplace/swapBox";
import React, {
  ChangeEvent,
  Fragment,
  Suspense,
  useEffect,
  useState,
} from "react";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
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
import { getPreciseDistance } from "geolib";
import { useSelector } from "react-redux";
import { convertGeoLocation } from "@/utils/calculateLocation";
import InputArea from "@/components/atom/form/inputArea";

const MarketplaceSwap = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  //@ts-ignore
  const { userDetails } = useSelector((state) => state?.user);
  //@ts-ignore
  const { locationData } = useSelector((state) => state?.location);

  const { longitude, latitude } = locationData;
  console.log(longitude);

  const [userLocation, setUserLocation] = useState();
  const [bgImage, setBgImage] = useState();
  const [loadedData, setLoadedData] = useState([]);
  const [filteredData, setFilterdData] = useState([]);

  const getData = () => {
    return axiosInstance("/marketplace/get_all_swap_listings", {
      headers: {
        Authorization: `Bearer ${AUTH_COOKIE}`,
      },
    });
  };

  const { data, isError, isPending } = useQuery({
    queryKey: ["details"],
    queryFn: getData,
  });

  useEffect(() => {
    const retrivedData = data?.data?.data;
    setLoadedData(retrivedData);
    setFilterdData(retrivedData);
  }, [data]);

  const searchForSwaps = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const filterData = loadedData?.filter((data: any) =>
      data.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilterdData(filterData);
  };

  if (isPending) return <IsLoadingDatas />;

  if (isError) return <IsErrorLoadingData />;

  return (
    <>
      <Box
        mb={"2em"}
        display="flex"
        alignItems="center"
        justifyContent={"space-between"}
        flexWrap={["wrap", "wrap", "wrap", "nowrap"]}>
        <Text fontWeight="bold" fontSize={["20px", "21px", "25px"]}>
          P2P Marketplace
        </Text>

        <Box display="flex" gap=".5em" alignItems={"center"}>
          <InputArea
            type="search"
            placeholder="Search "
            onChange={(e) => searchForSwaps(e)}
          />

          <Link href="/dashboard/create/swap">
            <Buttons radius="10px">List Item</Buttons>
          </Link>
        </Box>
      </Box>
      <Box display="flex" flexWrap={"wrap"} gap={["1em", "2em"]}>
        {filteredData && filteredData.length > 0 ? (
          <>
            {Array.isArray(filteredData) && (
              <>
                {filteredData?.map((item, key: number) => {
                  const calculateDistance = getPreciseDistance(
                    { latitude, longitude },
                    { latitude: item?.latitude, longitude: item?.longitude }
                  );

                  let displayLocation;
                  const exactLocation = "0.00";

                  const getDistanceInMiles = convertGeoLocation({
                    distance: calculateDistance,
                  });

                  if (getDistanceInMiles === exactLocation) {
                    displayLocation = "Same Location";
                  } else {
                    displayLocation = `${getDistanceInMiles} m away`;
                  }

                  const openDrawer = () => {
                    onOpen();
                    setBgImage(item?.image);
                  };

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
                          view={openDrawer}
                          location={displayLocation}
                          swapItemId={item?.id}
                          posterId={item?.usersId}
                          requesterId={userDetails?.id}
                        />
                      </Suspense>
                      <DrawerContainer
                        title={item?.title}
                        size={["full", "md"]}
                        isOpen={isOpen}
                        onClose={onClose}>
                        <PreviewMarketplaceData
                          title={item?.title}
                          description={item?.description}
                          image={bgImage}
                          ISBN={item?.isbn}
                          genre={item?.genre}
                          condition={item?.condition}
                          owner={item?.user?.firstName}
                          postedAt={item?.createdAt}
                          locationDistance={userLocation}
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
