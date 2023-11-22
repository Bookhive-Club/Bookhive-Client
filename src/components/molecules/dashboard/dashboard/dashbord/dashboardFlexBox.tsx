import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

interface IContainer {
  title: string;
  image: string;
  content: string;
  path: string;
}
const Container = ({ title, path, content, image }: IContainer) => (
  <Box
    w={["100%", "100%", "409px"]}
    borderRadius="10px"
    p="1em"
    bg="brand.secondary"
    h="200px"
    py="2em"
    display="flex"
    flexDir="column"
    justifyContent="space-between"
    bgImage="/images/patternbg.png"
    bgPos="right"
    bgSize="contain"
    bgRepeat="no-repeat">
    <Avatar src={image} />

    <Box>
      <Text fontWeight={600} fontSize={["17px", "20px"]}>
        {title}
      </Text>
      <Link href={path}>
        <Text color="brand.primary" size="17px" fontWeight={600}>
          {content}
        </Text>
      </Link>
    </Box>
  </Box>
);

const DashboardFlexBox = () => {
  const data = [
    // {
    //   title: "Saved Books",
    //   content: "View all saved items",
    //   image: "/assets/dashboard/favorite.svg",
    //   path: "/dashboard/favorites",
    // },

    {
      title: "Swapped Books",
      content: "View swapped books",
      image: "/assets/dashboard/swap.svg",
      path: "/dashboard/swap",
    },
    {
      title: "Marketplace",
      content: "View marketplace",
      image: "/assets/dashboard/marketplace.svg",
      path: "/dashboard/marketplace",
    },
    {
      title: "Requests",
      content: "View swap requests",
      image: "/assets/dashboard/store.svg",
      path: "/dashboard/swap/requests",
    },
  ];

  return (
    <Flex
      my="1em"
      gap={"1em"}
      justifyContent={"space-between"}
      flexDir={["column", "column", "row"]}>
      {data.map((item, index) => (
        <Container
          key={index}
          title={item.title}
          content={item.content}
          image={item.image}
          path={item.path}
        />
      ))}
    </Flex>
  );
};

export default DashboardFlexBox;
