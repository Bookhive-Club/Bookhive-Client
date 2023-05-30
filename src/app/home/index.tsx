"use client";
import Header from "@/components/essentials/header";
import Hero from "@/components/home/hero";
import { Box } from "@chakra-ui/react";
import Info from "./info";
import Community from "./stats";
import Groups from "./groups";
import JoinCommunity from "./joinCommunity";
import Features from "./features";
import Footer from "@/components/essentials/footer";
import { useEffect } from "react";
import Script from "next/script";

const Homepage = () => {
  return (
    <>
      <Box className="hive_gradient">
        <Header />
        <Hero />
      </Box>
      <Info />
      <Community />
      <Groups />
      <JoinCommunity />
      <Features />
      <Footer />
    </>
  );
};
export default Homepage;
