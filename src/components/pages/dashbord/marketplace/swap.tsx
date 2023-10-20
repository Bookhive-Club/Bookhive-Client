"use client";
import BookShowcaseBox from "@/components/molecules/dashboard/marketplace/swapBox";
import React, { Fragment, Suspense } from "react";
import { Box, Text, Flex, Avatar, useDisclosure } from "@chakra-ui/react";
import DrawerContainer from "@/layouts/popups/appDrawerLayout";
import PreviewMarketplaceData from "@/components/templates/dashboard/marketplace/preview_marketplacedata";
import PeerSkeletonLoader from "@/components/skeletons/dashboard/peer_showcasebox_skeleton";
import Buttons from "@/components/atom/button/buttons";
import Link from "next/link";

const MarketplaceSwap = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

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
        {[1, 1, 1, 1, 1, 1].map((item, key) => {
          return (
            <Fragment key={key}>
              <Suspense fallback={<PeerSkeletonLoader />}>
                <BookShowcaseBox action={() => alert(0)} view={onOpen} />
              </Suspense>
            </Fragment>
          );
        })}

        <DrawerContainer
          title="Book Title"
          size={["full", "md"]}
          isOpen={isOpen}
          onClose={onClose}>
          <PreviewMarketplaceData />
        </DrawerContainer>

        {/* <ModalContainer isOpen={isModal} onClose={closeModal}>
          <Flex gap="1em">
            <Avatar />
            <Box>
              <Text fontWeight={"semibold"}>Emmanuel </Text>
              <Text>Swap</Text>
            </Box>
          </Flex>

          <Box>
            <InputArea type="text" placeholder="bokdname" />
          </Box>
        </ModalContainer> */}
      </Box>
    </>
  );
};

export default MarketplaceSwap;
