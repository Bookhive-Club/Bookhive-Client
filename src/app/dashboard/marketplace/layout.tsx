import React, { Fragment, ReactNode } from "react";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

interface MarketPlaceTab {
  name: string;
  path: string;
}

const Layout = ({ children }: { children: ReactNode }) => {
  const tabs: MarketPlaceTab[] = [
    {
      name: "Swap",
      path: "",
    },
    // {
    //   name: "Buy Books",
    //   path: "",
    // },
  ];

  return (
    <Box>
      {/* <Box display={"flex"} gap={"3em"}>
        {tabs.map((_, key) => {
          return (
            <Fragment key={key}>
              <Link href={_.path}>{_.name}</Link>
            </Fragment>
          );
        })}
      </Box> */}
      <Box my={"1rem"}>{children}</Box>
    </Box>
  );
};

export default Layout;
