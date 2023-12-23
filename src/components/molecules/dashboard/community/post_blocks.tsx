import React, { FC } from "react";
import {
  Box,
  Text,
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { TbBookmark } from "react-icons/tb";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";
import { AUTH_COOKIE, FORMAT_TWITTER_DATE } from "@/constants";
import { useSelector } from "react-redux";
import parseISO from "date-fns/parseISO";

interface ContentDetails {
  name: string;
  date?: string;
  content: string;
  status?: string;
  usersId: string;
  postId: string;
}

const ContentPostedBlocks: FC<ContentDetails> = ({
  name,
  date,
  content,
  status,
  postId,
  usersId,
}) => {
  //@ts-ignore
  const parseDate = parseISO(date);
  const twitterDate = FORMAT_TWITTER_DATE(parseDate);

  let statusBg, statusColor;

  if (status === "Is currently reading") {
    statusBg = "#ee4336";
    statusColor = "#fff";
  } else if (status === "Has read") {
    statusBg = "brand.primary";
    statusColor = "#fff";
  } else {
    statusBg = "#5422ff";
    statusColor = "#fff";
  }

  const toast = useToast();

  //handle item delete
  const url = `/community/post/${postId}`;

  const mutation = useMutation({
    mutationFn: () => {
      return axiosInstance.delete(url, {
        headers: {
          Authorization: `Bearer ${AUTH_COOKIE}`,
        },
      });
    },

    onSuccess: (response) => {
      //@ts-ignore
      const { message } = response?.data;

      toast({
        variant: "solid",
        status: "success",
        description: message,
        position: "top",
      });
    },
    onError: (err: any) => {
      console.log(err);
      const { data } = err?.response;
      toast({
        variant: "solid",
        status: "error",
        description: data?.message,
        position: "top",
      });
    },
  });

  const handleDelete = () => {
    mutation.mutate();
  };

  //@ts-ignore
  const { userDetails } = useSelector((state) => state?.user);
  const logedInUserPassword = userDetails?.id;

  //check if post belongs to a user before they can delete
  const checkPostAuthorization = logedInUserPassword === usersId;

  return (
    <Box borderBottom={"1px solid #3636368a"} py={"2.5em"}>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Box display="flex" gap="1em" alignItems="center">
          <Avatar name="Obiabo Immanuel" />
          <Box>
            <Box display={"flex"} alignItems={"center"} gap=".5em">
              <Text>{name}</Text>
              <Text color={"gray"} fontSize={"14px"}>
                {twitterDate}
              </Text>
            </Box>
            <Box
              w={"fit-content"}
              mt=".3em"
              bg={statusBg}
              borderRadius={"15px"}
              py={"5px"}
              px="10px">
              <Text color={statusColor} fontSize="13.6px">
                {status}📗
              </Text>
            </Box>
          </Box>
        </Box>
        <Box cursor={"pointer"}>
          <Menu>
            <MenuButton>
              <FiMoreVertical />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <TbBookmark /> <Text>Save Post</Text>
              </MenuItem>

              {checkPostAuthorization && (
                <MenuItem>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap=".3em"
                    onClick={handleDelete}>
                    <HiOutlineTrash color="red" />{" "}
                    <Text color={"red"}>Delete</Text>
                  </Box>
                </MenuItem>
              )}
            </MenuList>
          </Menu>
        </Box>
      </Flex>

      {/* <Box>Is Reading</Box> */}

      <Box my="1.7em" width={"85%"} mx="auto">
        <Text>{content}</Text>
        <Box
          w="100%"
          h="250px"
          bg="black"
          my="1em"
          borderRadius={"15px"}
          bgImage={""}></Box>

        <Box>
          <Text>Rating: 3.4</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentPostedBlocks;
