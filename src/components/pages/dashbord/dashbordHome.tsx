import DashboardAdsHero from "@/components/molecules/dashboard/dashboard/dashbord/dashboardAdsHero";
import DashboardFlexBox from "@/components/molecules/dashboard/dashboard/dashbord/dashboardFlexBox";
import { Box } from "@chakra-ui/react";

const DashboardHome = () => {
  return (
    <Box>
      <DashboardAdsHero />
      <DashboardFlexBox />
    </Box>
  );
};

export default DashboardHome;
