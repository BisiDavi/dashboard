import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.nomics.com/v1/currencies",
    params: {
        key: process.env.NEXT_PUBLIC_CRYPTO_KEY,
    },
});

export default axiosInstance;
