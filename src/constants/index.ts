import { getCookie } from "cookies-next";
import { useSelector } from "react-redux";

const AUTH_COOKIE = getCookie("_auth_token");
export const BASE_URL = "http://localhost:3001";

const FORMAT_TWITTER_DATE = (date: any) => {
  const now = new Date();
  const diffInSeconds = (now.getTime() - date.getTime()) / 1000;

  if (diffInSeconds < 60) {
    return "Just now";
  } else if (diffInSeconds < 3600) {
    return Math.floor(diffInSeconds / 60) + "m";
  } else if (diffInSeconds < 86400) {
    return Math.floor(diffInSeconds / 3600) + "h";
  } else {
    return Math.floor(diffInSeconds / 86400) + "d";
  }
};

export { AUTH_COOKIE, FORMAT_TWITTER_DATE };
