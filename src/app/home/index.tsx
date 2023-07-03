"use client";
import Header from "@/components/atom/home/header";
import Hero from "@/components/templates/home/hero";
import { Box } from "@chakra-ui/react";
import Info from "./info";
import Community from "./stats";
import Groups from "./groups";
import JoinCommunity from "./joinCommunity";
import Features from "./features";
import Footer from "@/components/atom/home/footer";
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
