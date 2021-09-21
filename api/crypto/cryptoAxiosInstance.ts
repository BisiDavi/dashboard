import axios from "axios";

const cryptoAxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CRYPTO_BASE_API,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": true,
    },
    params: {
        key: process.env.NEXT_PUBLIC_CRYPTO_KEY,
    },
});

export default cryptoAxiosInstance;
