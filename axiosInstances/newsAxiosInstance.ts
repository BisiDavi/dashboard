import axios from "axios";

const newsAxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_NEWS_BASE_API,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
    },
    params: {
        apiKey: process.env.NEXT_PUBLIC_NEWS_API_KEY,
    },
});

export default newsAxiosInstance;
