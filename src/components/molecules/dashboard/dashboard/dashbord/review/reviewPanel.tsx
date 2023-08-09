import {
  Box,
  Button,
  Flex,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { RiPagesLine } from "react-icons/ri";
import Buttons from "@/components/atom/button/buttons";

export const ReviewPanel = () => {
  return (
    <Flex
      gap={"1em"}
      flexDir={["column", "row"]}
      alignItems={"center"}
      h={["270px"]}>
      <Box w={["100%", "100%", "359px"]} h={"100%"} bg={"red"}>
        lorel
      </Box>
      <Box w={["100%", "549px"]}>
        <Text fontWeight={600} fontSize={["20px", " 30px"]}>
          The Venerable Swordsman Origins: Almighty Domain
        </Text>

        <UnorderedList
          display={"inline-flex"}
          gap={"2em"}
          listStyleType={"none"}>
          <ListItem>
            <ListIcon as={BiCategoryAlt} />
            Fantasy
          </ListItem>

          <ListItem>
            <ListIcon as={RiPagesLine} />
            Chapters
          </ListItem>

          <ListItem>
            <ListIcon as={BiCategoryAlt} />
            Fantasy
          </ListItem>

          <ListItem>
            <ListIcon as={BiCategoryAlt} />
            Fantasy
          </ListItem>
        </UnorderedList>

        <Box></Box>

        <Flex gap={"1em"}>
          <Buttons color={"#fff"} borderRadius={"none"}>
            Read
          </Buttons>
          <Buttons
            color={"brand.primary"}
            bg={"none"}
            border={"1px solid #0DBA63"}
            borderRadius={"none"}>
            + Add to Shelf
          </Buttons>
          <Buttons color={"#fff"} borderRadius={"none"}>
            <AiOutlineHeart />
          </Buttons>
        </Flex>
      </Box>
    </Flex>
  );
};
