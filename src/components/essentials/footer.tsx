import ContainerLayout from "@/layouts/containerLayout";
import { Box, Center, Text } from "@chakra-ui/react";
import { Logo } from "../micro/logo";
import WaitlistForm from "../home/waitlistForm";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Box mt={"3em"} bg={"#191919"} py={"4em"}>
      <ContainerLayout>
        <Box>
          <Logo />
        </Box>

        <Center>
          <a
            href="https://www.producthunt.com/posts/book-hive?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-book&#0045;hive"
            target="_blank">
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=394323&theme=light"
              alt="Book&#0032;Hive - &#0032;Book&#0032;Club&#0044;&#0032;&#0032;Connect&#0044;&#0032;Swap&#0044;&#0032;Summarize&#0032;Book&#0032;&#0032;with&#0032;AI&#0044;&#0032;Engage | Product Hunt"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </a>
        </Center>

        <Text textAlign={"center"} my={"2em"}>
          &copy; {date} Allright reserved
        </Text>
      </ContainerLayout>
    </Box>
  );
};
export default Footer;
