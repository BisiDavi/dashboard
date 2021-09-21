import axios from "axios";

const cryptoAxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_CRYPTO_BASE_API,
  c
    params: {
        key: process.env.NEXT_PUBLIC_CRYPTO_KEY,
    },
});

export default cryptoAxiosInstance;
