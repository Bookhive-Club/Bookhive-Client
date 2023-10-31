import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_DEV_URL,
    timeout: 3000, 
    headers: {

    }
})

export { axiosInstance };