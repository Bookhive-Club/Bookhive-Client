import { Logo } from "@/components/atom/icons/logo";
import UserChatContainer from "@/components/molecules/chat/userChatContainer";
import { Avatar, Box, Text, Flex } from "@chakra-ui/react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { BackButton } from "@/components/atom/icons/actionIcons";
import UserChatTop from "@/components/molecules/chat/UserChatTop";

const ChatLayout = () => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Box
        h="100vh"
        bg="gray.900"
        width={{
          sm: "",
          lg: "400px",
        }}>
        <Box py="1.5em" px="2em">

           
          <Flex alignItems={'center'} gap='1em'>
          <BackButton/>
          <Logo />

          </Flex>

          <Box my="4em">
            <Text my="1em" fontWeight={"600"} fontSize={"xl"}>
              Messages
            </Text>
            <Box my='3em'>
            <UserChatContainer />
            <UserChatContainer />
            <UserChatContainer />
            </Box>
          </Box>
        </Box>
      </Box>
        <Box w='60%'>
           <UserChatTop/>
        </Box>
      <Box
        h="100vh"
        bg="dark.900"
        width={{
          sm: "",
          lg: "400px",
        }}>
        <Box py="5em" px="2em">
          <Box
            display={"flex"}
            gap=".5em"
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}>
            <Avatar size="lg" />
            <Text fontWeight={"600"} fontSize={"lg"}>
              Obiabo Emmanuel
            </Text>
            <Text>Victoria Island, Lagos</Text>
            <Flex>
              <Box>
                <MdOutlineLocalPhone />
                <Text>Call</Text>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ChatLayout;
