import WaitlistForm from "@/components/templates/home/waitlistForm";
import Buttons from "@/components/atom/button/buttons";
import ContainerLayout from "@/layouts/container/containerLayout";
import { Box, Text, Flex } from "@chakra-ui/react";

const JoinCommunity = () => {
  return (
    <Box bg={"#1A1A1A"} my={"5em"} py={"5em"} w={"100%"}>
      <ContainerLayout>
        <Box
          bg={"#141414"}
          position={"relative"}
          px={["1em", "4em"]}
          py={"3em"}
          w={"100%"}
          h={["50em", "500px"]}
          overflow={"hidden"}>
          <Flex gap={"1em"} flexDir={["column", "column", "row"]}>
            <Box w={["100%", "100%", "500px"]}>
              <Text fontSize={["30px", "50px"]}>Join Our Community</Text>
              <Text my={"2em"} fontSize={["16px", "17px"]}>
                {/* Be part of our exclusive waitlist and become a valued member of
                our vibrant book-loving community. */}
                Be the first to know when we launch and join our community of
                book lovers today.
              </Text>

              <Buttons>Join Community</Buttons>
            </Box>

            <Box>
              <Box
                className="rotate-item"
                position={"absolute"}
                h={"100%"}
                right={"0"}
                bgImage={
                  "https://res.cloudinary.com/dhdqt4xwu/image/upload/v1684034719/bookhive/Group_237806_1_ottygn.svg"
                }
                // bgPos={"center"}
                // bgSize={"cover"}
                bgRepeat={"no-repeat"}
                w={["100%", "100%", "500px"]}></Box>
            </Box>
          </Flex>
        </Box>
      </ContainerLayout>
    </Box>
  );
};
export default JoinCommunity;
