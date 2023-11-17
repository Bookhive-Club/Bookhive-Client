import ContainerLayout from "@/layouts/container/containerLayout";
import { Box, Text, Flex, Link, Divider } from "@chakra-ui/react";
import { RxDiscordLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import { PiGithubLogo } from "react-icons/pi";
import { LiaLinkedin } from "react-icons/lia";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Box
      color="#cfcfcf"
      w="100%"
      bg="#191919"
      pb={{ base: "2em", md: "7em" }}
      pt={{ base: "2em", md: "4em" }}>
      <ContainerLayout>
        <Divider mb={{ base: "2em", md: "1.5em" }} />
        <Flex
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          align={"center"}>
          <Flex gap="1em">
            <Link>Privacy Policy</Link>
            <Link>Terms of Use</Link>
          </Flex>
          <Text my={{ base: "1em", md: "0" }}>
            &copy; {date} Bookhive. All rights reserved
          </Text>
          <Flex
            direction="row"
            align="center"
            mt={{ base: "2em", md: "0em" }}
            gap="2em">
            <Link
              href="https://twitter.com/JoinBookhive"
              p="0.5em"
              borderRadius="50%"
              backgroundColor="#292727">
              <FaXTwitter size={20} />
            </Link>
            {/* <Link
              href="#"
              p="0.5em"
              borderRadius="50%"
              backgroundColor="#292727">
              <LiaLinkedin size={20} />
            </Link> */}
            <Link
              href="https://github.com/bookhive-Club"
              p="0.5em"
              borderRadius="50%"
              backgroundColor="#292727">
              <PiGithubLogo size={20} />
            </Link>
            {/* <Link
              href="#"
              p="0.5em"
              borderRadius="50%"
              backgroundColor="#292727">
              <RxDiscordLogo size={20} />
            </Link> */}
          </Flex>
        </Flex>
      </ContainerLayout>
    </Box>
  );
};

export default Footer;
