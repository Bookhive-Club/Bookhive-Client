"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import ContainerLayout from "@/layouts/container/containerLayout";
import React, { FC } from "react";
import { Big_Shoulders_Stencil_Text } from "next/font/google";

const infos = [
  {
    title: "Join Book Clubs",
    keyword: "Club",
    description: `Join Book Clubs and connect with fellow readers to discuss and explore captivating literary works together. Expand your reading horizons and engage in stimulating conversations.`,
  },
  {
    bg: "#0DBA63",
    title: "Locate Book Stores",
    keyword: "Stores",
    description: `Unleash Your Bookstore Radar: Effortlessly locate nearby bookstores, indulge in browsing physical shelves, and uncover literary treasures with our platform as your personal "Shazam" for bookstores.`,
  },

  {
    title: "Swap Books",
    keyword: "Swap",
    description: `Swap Books with other book lovers and discover new stories by exchanging your favorite reads. Share your passion for literature while enjoying a diverse range of books through a community-based book swapping platform.`,
  },
];

type TinfoBox = {
  keyword: string;
  title: string;
  description: string;
  bg?: string;
};

const InfoBox: FC<TinfoBox> = ({ keyword, title, description, bg }) => {
  return (
    <Box
      w={["100%", "422px"]}
      py={"4em"}
      px={"1.5em"}
      bg={bg ? bg : "dark.10"}
      h={"380px"}>
      <Text>{keyword}</Text>

      <Text fontSize={["18px", "22px"]} fontWeight={"600"} my={"1em"}>
        {title}
      </Text>

      <Text>{description}</Text>
    </Box>
  );
};

const Info = () => {
  return (
    <Box my={"8em"} py={"4em"} bg={"dark.20"}>
      <ContainerLayout>
        <Flex gap={"1em"} flexDir={["column", "row", "row"]}>
          {infos.map(({ keyword, bg, title, description }, index) => {
            return (
              <Box key={index}>
                <InfoBox
                  bg={bg}
                  title={title}
                  description={description}
                  keyword={keyword}
                />
              </Box>
            );
          })}
        </Flex>
      </ContainerLayout>
    </Box>
  );
};
export default Info;
