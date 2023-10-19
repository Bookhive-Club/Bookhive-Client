import BookShowcaseBox from "@/components/molecules/dashboard/marketplace/swapBox";
import React, { Fragment } from "react";
import { Box, Text } from "@chakra-ui/react";
const MarketplaceSwap = () => {
  return (
    <Box display="flex" flexWrap={"wrap"} gap={["1em", "2em"]}>
      {[1, 1, 1, 1, 1, 1].map((item, key) => {
        return (
          <Fragment key={key}>
            <BookShowcaseBox />
          </Fragment>
        );
      })}
    </Box>
  );
};

export default MarketplaceSwap;
