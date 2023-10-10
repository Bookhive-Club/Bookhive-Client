"use client";

import { WhiteLogo } from "@/components/atom/icons/logo";
import { Box, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode, FC } from "react";
type TLayout = {
  children: ReactNode;
  layoutHeader: string;
  CTA?: string;
  revarse?: boolean;
  ctaPath?: string;
};
const AuthLayout: FC<TLayout> = ({
  CTA,
  ctaPath,
  children,
  layoutHeader,
  revarse,
}) => {
  return (
    <Flex
      flexDir={["column", "column", revarse === false ? "row-reverse" : "row"]}>
      <Box
        h={["50vh", "50vh", "100vh"]}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        w={["100%", "100%", "50%"]}
        px={"1em"}
        bg={"brand.100"}
        bgImage={
          "https://res.cloudinary.com/dhdqt4xwu/image/upload/v1684644531/bookhive/authbg_kaalqb.png"
        }
        bgSize={"cover"}
        bgPos={"center"}>
        <Box>
          <WhiteLogo />
          <Text
            fontWeight={"bold"}
            fontSize={["20px ", "40px"]}
            color={"white"}>
            Welcome Back!
          </Text>
          <Text my={"1em"}>
            To Keep Connected with us pleased login with your personal info.
          </Text>

          <a href={ctaPath}>
            <Box
              w={"100%"}
              border={"1px solid white"}
              p={"1.5em"}
              textAlign={"center"}
              fontWeight={"bold"}>
              {CTA}
            </Box>
          </a>
        </Box>
      </Box>
      <Box
        w={["100%", "100%", "50%"]}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        px={"2em"}
        py={"1rem"}>
        <Box width={["100%", "100%", "550px"]} mx={"auto"} py={"2rem"}>
          <Text fontWeight={"bold"} fontSize={["20px", "20px", "25px"]}>
            {layoutHeader}
          </Text>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};
export default AuthLayout;
