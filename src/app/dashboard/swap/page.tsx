import NoSwapedItem from "@/components/atom/store/noSwapItem";
import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/utils/axios";
import IsLoadingDatas from "@/components/atom/loading_data";
import IsErrorLoadingData from "@/components/atom/errors/errorLoading";
import { AUTH_COOKIE } from "@/constants";

const Swap = () => {
  // const getData = () =>
  //   axiosInstance("/marketplace/get_all_swap_listings", {
  //     headers: {
  //       Authorization: `Bearer ${AUTH_COOKIE}`,
  //     },
  //   });

  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ["details"],
  //   queryFn: getData,
  // });

  // console.log(data);

  // if (isLoading) return <IsLoadingDatas />;

  // if (isError) return <IsErrorLoadingData />;
  return (
    <Box>
      <NoSwapedItem />
    </Box>
  );
};

export default Swap;
