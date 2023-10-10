import { Logo } from "@/components/atom/icons/logo";
import { dashboardSideBarData } from "@/utils/data/dashboardSideData";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const DashboardSidebar = () => {
  return (
    <Box w={"200px"}>
      {dashboardSideBarData?.map(({ name, path, icon }, index) => {
        return (
          <Box
            key={index}
            my={"3em"}
            _hover={{
              bg: "brand.secondary",
              py: "1em",
              borderRadius: "10px",
            }}
            px={"2em"}>
            <Link href={path}>
              <Flex alignItems={"center"} gap={".7em"}>
                {icon}
                <Text fontSize={"18px"}>{name}</Text>
              </Flex>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};

export default DashboardSidebar;
