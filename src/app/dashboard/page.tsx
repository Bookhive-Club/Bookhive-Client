"use client";
import DashboardHome from "@/components/pages/dashbord/dashbordHome";
import { useGeolocation } from "@uidotdev/usehooks";

const Page = () => {
  const { longitude, latitude } = useGeolocation();

  return <DashboardHome />;
};

export default Page;
