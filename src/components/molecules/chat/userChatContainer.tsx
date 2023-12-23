import { Box, Text, Avatar, Flex } from "@chakra-ui/react";

const UserChatContainer = () => {
  return (
    <Box borderBottom={'1px solid gray'} my='2em' cursor={'pointer'}>
      <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Box display={'inline-flex'} alignItems={'center'} gap='1em' >
          <Avatar />
          <Text>Sudo Whoami</Text>
        </Box>

        <Text color={'brand.primary'} fontWeight={600}>5 Mins</Text>
      </Flex>

      <Box my='1em' >
        <Text fontSize={'15px'}>Hello Obiabo, i would love to get this book, is it still avaibale?</Text>
      </Box>
    </Box>
  );
};

export default UserChatContainer;
