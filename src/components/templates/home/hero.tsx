"use client";
import ContainerLayout from "@/layouts/container/containerLayout";
import { Box, Text, Center, Flex } from "@chakra-ui/react";
import Buttons from "../../atom/button/buttons";
import {
  StackedBooksLike,
  SmallAi,
  LargeAi,
  TagLike,
  TagOne,
} from "../../atom/icons/heroSvgs";
import Link from "next/link";
const Hero = () => {
  return (
    <ContainerLayout>
      <Box
        position={["absolute"]}
        top={["120px", "269px"]}
        left={["300px", "109px"]}>
        <StackedBooksLike />
      </Box>

      <Box
        display={["none", "none", "block"]}
        position={["static", "absolute"]}
        top={"650px"}
        left={"1160px"}>
        <SmallAi />
      </Box>

      <Box position={["static", "absolute"]} top={"200"} left={"1407px"}>
        <TagLike />
      </Box>

      <Box
        display={["none", "none", "block"]}
        position={["static", "absolute"]}
        top={"690"}
        left={"300px"}>
        <TagOne />
      </Box>
      <Flex
        position={"relative"}
        justifyContent={"center"}
        textAlign={"center"}
        w={["100%", "980px"]}
        mx={"auto"}
        my={["5em", "9em"]}>
        <Box>
          <Text fontSize={["30px", "50px", "80px"]} fontWeight="800">
            An Open Platform to Engage Book Lovers.
          </Text>

          <Text my={"1em"} fontSize={["16px ", "20px"]} color={"#E3E3E3"}>
            Unleash your love for books on our open platform. Connect, explore,
            and engage with fellow book lovers. Join us today and be part of a
            vibrant literary community.
          </Text>

          <Link href={"/auth/signup"}>
            <Buttons
              size={"lg"}
              radius={"1em"}
              py={"1.6em"}
              px={"3em"}
              w={"300px"}
              h={"55px"}
              my={"1em"}>
              Get Started
            </Buttons>
          </Link>
        </Box>
      </Flex>
    </ContainerLayout>
  );
};
export default Hero;
