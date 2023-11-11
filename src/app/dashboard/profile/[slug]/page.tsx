import { Box, Avatar, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  //@ts-ignore
  const { userDetails } = useSelector((state) => state?.user);
  return (
    <Box
      bg={"dark.10"}
      mx={"auto"}
      borderRadius="10px"
      w={["100%", "100%", "700px"]}
      py={"4em"}
      px={"1.5em"}>
      <Box
        display="flex"
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}>
        <Avatar
          size="xl"
          name={`${userDetails?.firstName} ${userDetails?.lastName}`}
        />
        <Text my=".6em" fontWeight="medium" fontSize={["20px", "22px"]}>
          {userDetails?.firstName} {userDetails?.lastName}
        </Text>
      </Box>
    </Box>
  );
};

export default ProfilePage;
