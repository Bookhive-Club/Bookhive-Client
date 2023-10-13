"use client";
import BookPartLayout from "@/layouts/dashboard/bookPartLayout";
import React from "react";
import { Box, Badge, Text } from "@chakra-ui/react";
import BookDetailHolder from "@/components/molecules/bookDefailtholder";

const Favorites = () => {
  return (
    <BookPartLayout title="Favourite Books">
      <BookDetailHolder />
    </BookPartLayout>
  );
};

export default Favorites;
