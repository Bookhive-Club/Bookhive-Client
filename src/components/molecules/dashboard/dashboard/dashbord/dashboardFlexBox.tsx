import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IContainer {
  title: string;
  image: string;
  content: string;
}
const Container = ({ title, content, image }: IContainer) => (
  <Box
    w={["100%", "409px"]}
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
      <Text color="brand.primary" size="17px" fontWeight={600}>
        {content}
      </Text>
    </Box>
  </Box>
);

const DashboardFlexBox = () => {
  const data = [
    {
      title: "Saved Books",
      content: "View all saved books",
      image: "/assets/dashboard/favorite.svg",
    },
    {
      title: "Store",
      content: "View store",
      image: "/assets/dashboard/store.svg",
    },
    {
      title: "Swapped Books", // Changed title to "Swapped Books"
      content: "View swapped books", // Changed content to "View swapped books"
      image: "/assets/dashboard/swap.svg",
    },
  ];

  return (
    <Flex my="1em" gap={"1em"} flexDir={["column", "column", "row"]}>
      {data.map((item, index) => (
        <Container
          key={index}
          title={item.title}
          content={item.content}
          image={item.image}
        />
      ))}
    </Flex>
  );
};

export default DashboardFlexBox;
