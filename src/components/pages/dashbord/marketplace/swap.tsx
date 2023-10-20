"use client";
import BookShowcaseBox from "@/components/molecules/dashboard/marketplace/swapBox";
import React, { Fragment } from "react";
import { Box, Text, useDisclosure } from "@chakra-ui/react";
import DrawerContainer from "@/layouts/popups/appDrawerLayout";
import PreviewMarketplaceData from "@/components/templates/dashboard/marketplace/preview_marketplacedata";

const MarketplaceSwap = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <Box display="flex" flexWrap={"wrap"} gap={["1em", "2em"]}>
      {[1, 1, 1, 1, 1, 1].map((item, key) => {
        return (
          <Fragment key={key}>
            <BookShowcaseBox action={() => alert(0)} view={onOpen} />
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
    </Box>
  );
};

export default MarketplaceSwap;
