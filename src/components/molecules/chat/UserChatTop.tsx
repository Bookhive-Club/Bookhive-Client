import { Avatar, Box, Text, Flex } from "@chakra-ui/react"

const UserChatTop = () => {
    return <Box w='100%'>
        <Flex>
            <Box display={'flex'} alignItems={'center'} gap='1em' py='2em' px='2em'>
                <Avatar/>
                <Box>
                    <Text>Obiabo Emmanuel</Text>
                    <Text>sudo@gmail.com</Text>
                </Box>
            </Box>
        </Flex>
    </Box>
}
export default UserChatTop