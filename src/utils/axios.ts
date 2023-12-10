import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_DEFAULT_URL
      : process.env.NEXT_PUBLIC_DEFAULT_URL,
  timeout: 11000,
});

export { axiosInstance };
