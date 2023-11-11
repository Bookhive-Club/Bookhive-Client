"use client";
import NoDataFound from "@/components/atom/errors/noDataFound";
import EmptyStore from "@/components/atom/store/emptyStore";
import { Center } from "@chakra-ui/react";

const Stores = () => {
  return (
    <>
      <Center>
        <EmptyStore />
      </Center>
    </>
  );
};

export default Stores;
