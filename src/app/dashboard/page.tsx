"use client";
import DashboardHome from "@/components/pages/dashbord/dashbordHome";
import { useGeolocation, useSessionStorage } from "@uidotdev/usehooks";

const Page = () => {
  const { longitude, latitude } = useGeolocation();
  const location = {
    lat: latitude,
    long: longitude,
  };

  const parseLocation = JSON.stringify(location);
  const [geo, setGeo] = useSessionStorage("user_location", location);

  return <DashboardHome />;
};

export default Page;
