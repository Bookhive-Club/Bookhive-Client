import { Badge, Box, Text, Flex } from "@chakra-ui/react";
import CommentBox from "./commentBox";
const RecommendBox = () => {
  return (
    <Box my={"2em"}>
      <Text fontWeight={600} fontSize={"18px"} my={"1.5em"}>
        Youll also Like
      </Text>

      <Flex gap={"1em"} justifyContent={"space-between"} flexWrap={"wrap"}>
        {Array(3)
          .fill(null)
          .map((items) => {
            return (
              <Box
                h={["383.242px"]}
                borderRadius={"10px"}
                w={["100%", "279.051px"]}
                bg={"#212121"}
                p={"1em"}
                key={items}>
                <Box
                  borderRadius={"8px"}
                  h={"201.134px"}
                  w={"100%"}
                  bg={"black"}></Box>
                <Badge
                  my={"1em"}
                  px={"0.6em"}
                  py={"0.5em"}
                  bg={"brand.primary"}
                  color={"#fff"}
                  borderRadius={"md"}>
                  Fiction
                </Badge>
                <Text fontSize={["18px"]} fontWeight={600}>
                  The Crying Book
                </Text>

                <Text color={"brand.grayed"}>Lieather Christel</Text>
              </Box>
            );
          })}
      </Flex>

      <Box my={"1em"}>
        <Text fontWeight={"bold"}>Reviews</Text>

        <Box my={"1em"}>
          <CommentBox />
        </Box>
      </Box>
    </Box>
  );
};

export default RecommendBox;