import DashboardAdsHero from "@/components/molecules/dashboard/dashboard/dashbord/dashboardAdsHero";
import DashboardFlexBox from "@/components/molecules/dashboard/dashboard/dashbord/dashboardFlexBox";
import { Box, Text, Avatar } from "@chakra-ui/react";

const DashboardHome = () => {
  return (
    <Box>
      <Box my={"1.5em"} alignItems={"center"} display="flex" gap="2em">
        <Avatar name="Sudo Whoami" />
        <Text fontSize={["20px", "24px"]}>Hi, Sudo Whoami 👋</Text>
      </Box>
      <DashboardAdsHero />
      <DashboardFlexBox />
    </Box>
  );
};

export default DashboardHome;
