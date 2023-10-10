import ContainerLayout from "@/layouts/container/containerLayout";
import { Box, Flex, Text } from "@chakra-ui/react";
const Community = () => {
  return (
    <ContainerLayout>
      <Flex
        justifyContent={"space-between"}
        my={"3em"}
        flexDir={["column", "column", "row"]}
        gap={"2em"}>
        <Box w={["100%", "459px"]}>
          <Text fontSize={["30px", "50px"]}>
            Join Our Expanding Literary Family
          </Text>
        </Box>

        <Flex flexDirection={"column"} gap={"2em"}>
          <Box>
            <Text fontSize={["30px", "50px"]} className={"green-shade"}>
              Rapid
            </Text>
            <Text>Growing Community</Text>
          </Box>

          <Box>
            <Text
              fontSize={["30px", "50px"]}
              className={"active-community-shade"}>
              Vibrant
            </Text>
            <Text>Book Circle</Text>
          </Box>

          <Box>
            <Text
              fontSize={["30px", "50px"]}
              fontWeight={"400"}
              className={"active-stores-shade"}>
              Active
            </Text>
            <Text>Book Ratings </Text>
          </Box>
        </Flex>
      </Flex>
    </ContainerLayout>
  );
};
export default Community;
