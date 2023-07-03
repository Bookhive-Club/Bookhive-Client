"use client";

import {
  Box,
  Flex,
  Menu,
  MenuButton,
  Avatar,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Logo } from "../../../../micro/logo";
import { IoIosNotificationsOutline } from "react-icons/io";

const DashboardHeader = () => {
  const menuItems = [
    { name: "Profile", path: "" },
    { name: "Logout", path: "" },
  ];
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      px={"2em"}
      py={"1.2em"}
      bg={"brand.secondary"}>
      <Box>
        <Logo />
      </Box>

      <Flex alignItems={"center"} gap={"2em"}>
        <IoIosNotificationsOutline size={"1.5em"} />
        <Menu>
          <MenuButton>
            <Avatar name="O" />
          </MenuButton>

          <MenuList>
            {menuItems.map((items, index) => {
              return <MenuItem key={index}>{items?.name}</MenuItem>;
            })}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
export default DashboardHeader;
