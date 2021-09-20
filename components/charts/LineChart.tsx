import { useState, useEffect } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import cryptoAxiosInstance from "@api/crypto/cryptoAxiosInstance";
import demoCrypto from "./demo.json";

export default function CryptoAreaChart() {
    const [chartData, setChartData] = useState<any>([]);
    //useEffect(() => {
    //    cryptoAxiosInstance
    //        .get("/sparkline?ids=BTC,ETH,XRP&start=2021-09-19T00%3A00%3A00Z")
    //        .then((response) => {
    //            //console.log("response", response.data);
    //            setChartData(response.data);
    //        })
    //        .catch((error) => {
    //            console.error("error", error.response);
    //            setChartData(error.response);
    //        });
    //}, []);

    const convertToDate = (itemDate) => new Date(itemDate).toLocaleDateString();
    let dummyArray = [];
    const cryptoData = (coinName) =>
        demoCrypto.filter((data) => data.currency === coinName);

    function coinObject(name) {
        const cryptoCoin = cryptoData(name);
        const key = name.toLocaleLowerCase();
        return {
            date: cryptoCoin.map((coin) =>
                coin.timestamps.map((timestamp) => convertToDate(timestamp)),
            )[0],
            [key]: cryptoCoin.map((coin) =>
                coin.prices.map((price) => price),
            )[0],
        };
    }

    dummyArray = [
        ...dummyArray,
        { ...coinObject("BTC"), ...coinObject("ETH"), ...coinObject("XRP") },
    ];

    let aa = {};
    const coinData = dummyArray.map((item) => {
        return item.date.map((dateItem, index) => {
            aa = {
                ...aa,
                date: dateItem,
                btc: item.btc[index],
                eth: item.eth[index],
                xrp: item.xrp[index],
            };
            return aa;
        });
    })[0];
    console.log("coinData", coinData);

    return (
        <>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={coinData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="btc"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                    />
                    <Area
                        type="monotone"
                        dataKey="eth"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                    />
                    <Area
                        type="monotone"
                        dataKey="xrp"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </>
    );
}
