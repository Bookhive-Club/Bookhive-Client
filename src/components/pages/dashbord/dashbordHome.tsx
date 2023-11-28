import DashboardAdsHero from "@/components/molecules/dashboard/dashboard/dashbord/dashboardAdsHero";
import DashboardFlexBox from "@/components/molecules/dashboard/dashboard/dashbord/dashboardFlexBox";
import { Box, Text, Avatar } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateUserDetails } from "@/redux/slice/users.slice";
import { AUTH_COOKIE } from "@/constants";

const DashboardHome = () => {
  const dispatch = useDispatch();
  const getData = () =>
    axiosInstance("/user/details", {
      headers: {
        Authorization: `Bearer ${AUTH_COOKIE}`,
      },
    });

  const { data } = useQuery({
    queryKey: ["details"],
    queryFn: getData,
    refetchInterval: 3000,
    retry: 3,
  });

  const userData = data?.data?.data;

  useEffect(() => {
    dispatch(updateUserDetails(userData));
  }, [data]);

  return (
    <Box>
      <Box my={"1.5em"} alignItems={"center"} display="flex" gap="2em">
        <Avatar name={`${userData?.firstName} ${userData?.lastName}`} />
        <Text fontSize={["20px", "20px", "24px"]}>
          Hi, {userData?.firstName || "Good day"} 👋
        </Text>
      </Box>
      <DashboardAdsHero />
      <DashboardFlexBox />
    </Box>
  );
};

export default DashboardHome;
