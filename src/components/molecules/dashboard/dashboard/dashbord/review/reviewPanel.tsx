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
import Buttons from "@/components/atom/button/buttons";
import { Fragment } from "react";
import RecommendBox from "./booksRecommendations";
import { HiEye, HiCollection, HiDocumentText } from "react-icons/hi";

export const ReviewPanel = () => {
  return (
    <>
      <Flex
        gap={"1em"}
        flexDir={["column", "row"]}
        alignItems={"center"}
        h={["500px", "329px"]}>
        <Box
          w={["100%", "100%", "359px"]}
          h={"100%"}
          bg={"black"}
          borderRadius={"10px"}></Box>

        <Box w={["100%", "549px"]}>
          <Text fontWeight={600} fontSize={["20px", " 30px"]}>
            The Venerable Swordsman Origins: Almighty Domain
          </Text>

          <UnorderedList
            display={"inline-flex"}
            gap={"2em"}
            listStyleType={"none"}
            my={"1em"}
            mx={0}>
            <ListItem>
              <ListIcon as={HiCollection} />
              Fantasy
            </ListItem>

            <ListItem>
              <ListIcon as={HiDocumentText} />
              Fantasy
            </ListItem>

            <ListItem>
              <ListIcon as={HiEye} />
              3k
            </ListItem>
          </UnorderedList>

          <Box></Box>

          <Flex gap={"1em"} my={"1em"}>
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
            <Buttons
              bg={"none"}
              border={"1px solid brand.100"}
              color={"#fff"}
              borderRadius={"none"}>
              <AiOutlineHeart />
            </Buttons>
          </Flex>
        </Box>
      </Flex>

      <Box my={"4em"} bg={"brand.secondary"} py={"2em"} px={"2em"}>
        <Text fontWeight={600} fontSize={["18px"]}>
          Synopsis
        </Text>

        <Text my={"1em"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          corrupti cumque magni laudantium cupiditate! Voluptatem esse ex, qui
          nisi quidem ipsum alias ipsam tempora labore odit, quaerat unde,
          similique neque.
        </Text>

        <Box>
          <Text fontWeight={600} fontSize={["18px"]}>
            Tag
          </Text>

          <Flex my={"2em"} gap={"1em"}>
            {Array(3)
              .fill(null)
              .map((items, index) => {
                return (
                  <Fragment key={index}>
                    <Buttons
                      bg={"none"}
                      border={"1px solid #0DBA63  "}
                      color="#fff">
                      #Mystery
                    </Buttons>
                  </Fragment>
                );
              })}
          </Flex>

          <RecommendBox />

          {/* todo: include comment session */}
        </Box>
      </Box>
    </>
  );
};
