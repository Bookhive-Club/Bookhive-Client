"use client";

import {
  Box,
  Flex,
  Menu,
  MenuButton,
  Avatar,
  MenuItem,
  MenuList,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Logo } from "@/components/atom/icons/logo";
import { IoIosNotificationsOutline } from "react-icons/io";
import { dashboardHeaderNav } from "@/utils/navigations/nagiation";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineAdjustments, HiOutlineUser } from "react-icons/hi";
import { AiOutlinePoweroff } from "react-icons/ai";

const DashboardHeader = () => {
  const menuItems = [
    { name: "Profile", path: "", icon: <HiOutlineUser /> },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <HiOutlineAdjustments />,
    },
    { name: "Logout", path: "", icon: <AiOutlinePoweroff color="red" /> },
  ];

  const pathname = usePathname();
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      px={["1em", "2em", "10em"]}
      py={"1.2em"}
      bg={"brand.secondary"}>
      <Box>
        <Logo />
      </Box>

      {/* Navigation section */}
      <Box display={["none", "none", "flex"]} gap="1em">
        <UnorderedList
          cursor={"pointer"}
          listStyleType={"none"}
          display={"flex"}
          alignItems={"center"}
          gap="2em">
          {dashboardHeaderNav.map(({ title, path, active, icon }, key) => {
            return (
              <Fragment key={key}>
                <Link href={path}>
                  {pathname === path ? (
                    <ListItem
                      display={"flex"}
                      gap=".3em"
                      alignItems={"center !important"}
                      color={"brand.100"}>
                      {active}
                      {title}
                    </ListItem>
                  ) : (
                    <ListItem
                      _hover={{
                        color: "gray",
                      }}
                      display={"flex"}
                      gap=".3em"
                      alignItems={"center"}
                      color={"gray.400"}>
                      {icon}
                      {title}
                    </ListItem>
                  )}
                </Link>
              </Fragment>
            );
          })}
        </UnorderedList>
      </Box>
      {/* Navigation section */}

      <Flex alignItems={"center"} gap={"2em"}>
        <IoIosNotificationsOutline size={"1.5em"} />
        <Menu>
          <MenuButton>
            <Avatar name="O" />
          </MenuButton>

          <MenuList>
            {menuItems.map((items, index) => {
              return (
                <MenuItem
                  key={index}
                  gap="5px"
                  color={items.name === "Logout" ? "red" : ""}>
                  {items.icon} {items?.name}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
export default DashboardHeader;
