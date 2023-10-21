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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Logo } from "@/components/atom/icons/logo";
import { IoIosNotificationsOutline } from "react-icons/io";
import { dashboardHeaderNav } from "@/utils/navigations/nagiation";
import { Fragment, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineAdjustments, HiOutlineUser } from "react-icons/hi";
import { AiOutlinePoweroff } from "react-icons/ai";
import ModalContainer from "../popups/modalLayout";
import IndexSettings from "@/components/molecules/dashboard/dashboard/dashbord/settings";
import { useState, useEffect } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import DrawerContainer from "../popups/appDrawerLayout";
import { useRouter } from "next/navigation";

interface MenuItem {
  name: string;
  path: string;
  icon: JSX.Element;
  action: () => void;
}

const DashboardHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const {
    isOpen: isDrawerOpen,
    onOpen: openDrawer,
    onClose: closeDrawer,
  } = useDisclosure();

  const menuItems: MenuItem[] = [
    {
      name: "Profile",
      path: "/dashboard/settings",
      icon: <HiOutlineUser />,
      action: () => router.push("/dashboard/profile"),
    },
    {
      name: "Settings",
      path: "/dashboard/settings/profile",
      icon: <HiOutlineAdjustments />,
      action: () => onOpen(),
    },
    {
      name: "Logout",
      path: "",
      icon: <AiOutlinePoweroff color="red" />,
      action: () => {
        return;
      },
    },
  ];

  const pathname = usePathname();

  const [isUserProfileFixed, setIsUserProfileFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0) {
        setIsUserProfileFixed(true);
      } else {
        setIsUserProfileFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box className="fixed-user-profile">
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
          {/* <IoIosNotificationsOutline size={".5em"} /> */}
          <Box
            display={["block", "block", "none"]}
            cursor={"pointer"}
            onClick={openDrawer}>
            <RiMenu2Fill size="1.5em" />
          </Box>
          <Menu>
            <MenuButton>
              <Avatar name="O" />
            </MenuButton>

            <MenuList>
              <MenuItem>
                <Flex gap={"1em"} alignItems={"center"}>
                  <Avatar size={"sm"} />
                  <Box>
                    <Text fontWeight={"semibold"}>Sudo</Text>
                    <Text fontSize="14px">sudo@gmail.com</Text>
                  </Box>
                </Flex>
              </MenuItem>
              <hr />
              {menuItems.map((items, index) => {
                return (
                  <MenuItem
                    onClick={items.action}
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

      <ModalContainer title="Settings" isOpen={isOpen} onClose={onClose}>
        <IndexSettings />
      </ModalContainer>

      {/* Header mobile sidebar */}
      <DrawerContainer
        title="Menue"
        isOpen={isDrawerOpen}
        onClose={closeDrawer}>
        <UnorderedList
          cursor={"pointer"}
          listStyleType={"none"}
          display={"flex"}
          flexDir={"column"}
          mx={0}
          gap="3em">
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
      </DrawerContainer>
    </Box>
  );
};
export default DashboardHeader;
