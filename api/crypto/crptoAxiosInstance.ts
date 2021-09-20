import axios from "axios";

const crptoAxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CRYPTO_BASE_API,
    params: {
        key: process.env.NEXT_PUBLIC_CRYPTO_KEY,
    },
});

export default crptoAxiosInstance;
