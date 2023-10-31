import { axiosInstance } from "./axios";

interface PostData {
  url: string;
  param?: {};
  data: {} | any;
}

const sendRequest = async ({ url, data }: PostData) => {
  const request = axiosInstance.post(url, data);
  try {
    const response = await request;
    console.log(response);
  } catch (err) {
    //@ts-ignore
    console.log(err?.response?.data?.error);
  }
};

export { sendRequest };
