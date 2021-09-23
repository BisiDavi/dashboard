import axios from "axios";

const covid19AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_COVID_19_API,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
    },
});

export default covid19AxiosInstance;
