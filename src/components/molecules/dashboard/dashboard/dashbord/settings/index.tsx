import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React, { Fragment } from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { RxCaretRight } from "react-icons/rx";
import { FcDeleteDatabase } from "react-icons/fc";
import { MdSettingsSuggest } from "react-icons/md";
import Link from "next/link";
import { useSelector } from "react-redux";

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
      path: "/dashboard/settings/profile",
    },
    {
      name: "Update Settings",
      icon: <MdSettingsSuggest size="1.5em" />,
      path: "/dashboard/settings",
    },
  ];

  //@ts-ignore
  const { userDetails } = useSelector((state) => state?.user);

  return (
    <>
      <Box>
        <Flex gap="1em" alignItems={"center"}>
          <Avatar
            size={"lg"}
            name={`${userDetails?.firstName} ${userDetails?.lastName}`}
          />
          <Box>
            <Text fontWeight={"semibold"}>
              {userDetails?.firstName} {userDetails?.lastName}
            </Text>
            <Text>{userDetails?.email}</Text>
          </Box>
        </Flex>
      </Box>

      <Box my="1em">
        <Text fontWeight={"semibold"}>Manage</Text>
        <hr />

        <Box my={"1em"} display="flex" flexDir="column" gap="0.5em">
          {pathRoutes.map((_, key) => (
            <Fragment key={key}>
              <Link href={_.path}>
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
              </Link>
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
