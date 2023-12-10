import { convertDistance } from "geolib";

type Distance = {
  distance: number;
};
export const convertGeoLocation = ({ distance }: Distance) => {
  const returnedDistance = convertDistance(distance, "mi").toFixed(2);
  return returnedDistance;
};
