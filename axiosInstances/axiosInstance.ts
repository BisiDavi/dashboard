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

const options: any = {
    method: "GET",
    url: process.env.NEXT_PUBLIC_RAPIDAPI_API,
    params: { safeSearch: "Off", textFormat: "Raw", mkt: "en-us", cc: "us" },
    headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST,
        "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
    },
};
export async function newsAxiosInstance() {
    const { data } = await axios.request(options);
    return data.value;
}

export default axiosInstance;
