import { getCookie } from "cookies-next";
import { useSelector } from "react-redux";

const AUTH_COOKIE = getCookie("_auth_token");
export const BASE_URL = "http://localhost:3001";
export { AUTH_COOKIE };
