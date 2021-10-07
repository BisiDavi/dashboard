import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.nomics.com/v1/currencies",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
    },
    params: {
        key: process.env.NEXT_PUBLIC_CRYPTO_KEY,
    },
});

export const axiosRandomImageInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PEXEL_API,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_PEXEL_KEY}`,
    },
});

export const axiosRandomQuotesInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_RANDOM_QUOTES,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
    },
});

export default axiosInstance;
