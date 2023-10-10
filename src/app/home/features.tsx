import ContainerLayout from "@/layouts/container/containerLayout";
import { Text, Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { ForumeSvg, RecommedBooksSvg, RateBookSvg } from "./svgs/featuredSvg";

const featureDatas = [
  {
    image: <RecommedBooksSvg />,
    description: `Quick Book Recommendations: Discover curated recommendations in just 2-3 lines, helping you find your next captivating read with ease.`,
    title: "Get book recommendations",
    styles: {
      backgroundImage: "linear-gradient(#172E22, #191919)",
      backdropFilter: "blur(127px)",
    },
  },
  {
    image: <ForumeSvg />,
    description: `
    Book Clubs Galore: Dive into engaging discussion forums where you can create and join book clubs, fostering a vibrant community of literary enthusiasts.`,
    title: "Discussion forums",
    // styles: {
    //   backgroundImage: "linear-gradient( to top left,  , #191919,)",
    //   backdropFilter: "blur(127px)",
    // },
    styles: {
      backgroundImage: "linear-gradient(to top left,  #191A1A, #2C1D2F)",
      backdropFilter: "blur(127px)",
    },
  },
  {
    image: <RateBookSvg />,
    description: `
    Book Ratings Made Easy: Rate and review books effortlessly, sharing your valuable insights and experiences to help fellow readers discover exceptional literary treasures.`,
    title: "Create Ratings for Books",
    styles: {
      backgroundImage: "linear-gradient(to top left, #172E22, #191919)",
      backdropFilter: "blur(127px)",
    },
  },
];

type TFeature = {
  title: string;
  description: string;
  image: string;
  styles: {
    backgroundImage: string;
    backdropFilter: string;
  };
};

const FeaturedBox: FC<TFeature> = ({ styles, title, description, image }) => {
  return (
    <Box
      bg={"gray"}
      px={"1em"}
      py={"1.5em"}
      w={["100%", "396px", "386px"]}
      h={"400px"}
      fontSize={"20px"}
      style={styles}>
      <Box>{image}</Box>
      <Text fontSize={"20px"} fontWeight={"500"}>
        {title}
      </Text>
      <Text fontSize={["16px", "16px"]} lineHeight={"26px"} my={".7em"}>
        {description}
      </Text>
    </Box>
  );
};
const Features = () => {
  return (
    <ContainerLayout>
      <Box my={"4em"}>
        <Text
          textAlign={"center"}
          fontWeight={"500"}
          fontSize={["18px", "40px"]}
          my={"2em"}>
          Features
        </Text>
        <Flex gap={"1.5em"} justifyContent={"center"} flexWrap={"wrap"}>
          {featureDatas.map(({ title, styles, description, image }, index) => {
            return (
              <Box key={index}>
                <FeaturedBox
                  //@ts-ignore
                  image={image}
                  styles={styles}
                  title={title}
                  description={description}
                />
              </Box>
            );
          })}
        </Flex>
      </Box>

      <Flex
        my={"8em"}
        alignItems={"center"}
        gap={["1em", "2em"]}
        flexDir={["column", "column", "row"]}>
        <Box
          w={["100%", "600px"]}
          borderRadius={"10px"}
          bg={"gray"}
          h={"394px"}
          bgRepeat={"no-repeat"}
          bgPos={"cover"}
          bgSize={"cover"}
          bgImage={
            "https://res.cloudinary.com/dhdqt4xwu/image/upload/v1684068068/bookhive/Rectangle_145_elyluz.svg"
          }></Box>
        <Box w={["100%", "495px"]}>
          <Text
            fontSize={["20px", "25px", "40px"]}
            my={".5em"}
            fontWeight={"500"}>
            Integration of AI to summaries books
          </Text>

          <Text fontSize={["17px", "18px"]}>
            AI-Powered Summaries: Harnessing the power of AI, our platform
            offers concise and insightful book summaries, providing you with
            quick glimpses into captivating stories, saving you time while
            enhancing your reading experience.
          </Text>
        </Box>
      </Flex>
    </ContainerLayout>
  );
};
export default Features;
