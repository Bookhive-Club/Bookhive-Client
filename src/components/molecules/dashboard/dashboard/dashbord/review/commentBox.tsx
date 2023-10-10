import { Avatar, Box, Text, Flex } from "@chakra-ui/react";
import React, { FC } from "react";
import { HiThumbUp } from "react-icons/hi";
interface IProps {
  avatar: string;
  username: string;
  data: string;
  comment: string;
  likes: number;
}

const CommentBox: FC<IProps> = ({
  avatar,
  username,
  data,
  comment,
  likes,
}: IProps) => {
  return (
    <>
      <Flex gap={"1em"} flexDir={["column", "column", "row"]}>
        <Avatar src={avatar} name={username} />
        <Box w={["100%", "100%", "1067px"]}>
          <Box bg={"#212121"} rounded={"lg"} py={"2em"} px={"2em"}>
            <Text my={"1em"} fontWeight={"bold"}>
              Sudo whoami
            </Text>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae deleniti commodi nobis error et, odit maxime pariatur
              eveniet accusantium dolorum culpa similique obcaecati, quo enim
              quaerat nesciunt! Quidem, quasi dignissimos?
            </p>
          </Box>

          <Box my={"1em"}>
            <Flex alignItems="center" gap={".5em"}>
              <HiThumbUp size={"1.3em"} /> 3k
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default CommentBox;
