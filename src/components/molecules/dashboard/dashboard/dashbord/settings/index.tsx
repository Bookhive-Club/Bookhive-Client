import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { RxCaretRight } from "react-icons/rx";
import { FcDeleteDatabase } from "react-icons/fc";
import { MdSettingsSuggest } from "react-icons/md";

interface ProfileInterface {
  name: string;
  icon: JSX.Element;
  path: string;
}

const IndexSettings = () => {
  const pathRoutes: ProfileInterface[] = [
    {
      name: "Edit profile",
      icon: <HiCheckBadge size="1.5em" />,
      path: "",
    },
    {
      name: "Update Settings",
      icon: <MdSettingsSuggest size="1.5em" />,
      path: "",
    },
  ];

  return (
    <>
      <Box>
        <Flex gap="1em" alignItems={"center"}>
          <Avatar size={"lg"} name="Emmanuel Obiabo" />
          <Box>
            <Text fontWeight={"semibold"}>Emmanuel Obiabo</Text>
            <Text>Sudo whoami</Text>
          </Box>
        </Flex>
      </Box>

      <Box my="1em">
        <Text fontWeight={"semibold"}>Manage</Text>
        <hr />

        <Box my={"1em"} display="flex" flexDir="column" gap="0.5em">
          {pathRoutes.map((_, key) => (
            <Fragment key={key}>
              <Box
                bg={"dark.30"}
                cursor={"pointer"}
                px={".5em"}
                borderRadius={"10px"}
                py={"1em"}>
                <Flex
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap="0.5em">
                  <Box display={"flex"} gap=".5em">
                    {_.icon}
                    <Text>{_.name}</Text>
                  </Box>

                  <Box>
                    <RxCaretRight size="1.5em" />
                  </Box>
                </Flex>
              </Box>
            </Fragment>
          ))}
        </Box>
      </Box>

      <Box my="1em">
        <Text fontWeight={"semibold"}>Danger Zone</Text>
        <hr />

        <Box my={"1em"}>
          <Box
            bg={"#ff000008"}
            cursor={"pointer"}
            px={".5em"}
            borderRadius={"10px"}
            py={"1em"}
            display="flex"
            gap="1em">
            <FcDeleteDatabase size="1.5em" />
            <Text color={"red"} fontWeight={"semibold"}>
              Delete Account
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default IndexSettings;
