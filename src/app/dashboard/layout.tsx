"use client";
import DashboardHeader from "@/components/dashboard/dashboardHeader";
import { dashboardSideBarData } from "@/utils/data/dashboardSideData";
import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <DashboardHeader />
      {children}
    </main>
  );
};
export default Layout;
