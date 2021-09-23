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

export default axiosInstance;
