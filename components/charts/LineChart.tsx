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

export default function CryptoAreaChart() {
    const [chartData, setChartData] = useState<any>([]);
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        if (chartData.length === 0) {
            cryptoAxiosInstance
                .get("/sparkline?ids=BTC,ETH&start=2021-09-19T00%3A00%3A00Z")
                .then((response) => {
                    setChartData(response.data);
                })
                .catch((error) => {
                    console.error("error", error.response);
                });
        }
    }, [chartData]);
    console.log("chartData", chartData);
    const convertToDate = (itemDate) => new Date(itemDate).toLocaleDateString();
    let dummyArray = [];
    const cryptoData = (coinName) =>
        chartData?.filter((data) => data.currency === coinName);

    function coinObject(name) {
        const cryptoCoin = cryptoData(name);
        const key = name.toLocaleLowerCase();
        return chartData?.length !== 0
            ? {
                  date: cryptoCoin?.map((coin) =>
                      coin.timestamps?.map((timestamp) =>
                          convertToDate(timestamp),
                      ),
                  )[0],
                  [key]: cryptoCoin?.map((coin) =>
                      coin.prices?.map((price) => price),
                  )[0],
              }
            : [];
    }

    dummyArray = [
        ...dummyArray,
        { ...coinObject("BTC"), ...coinObject("ETH") },
    ];

    let aa = {};
    function serializeData() {
        return dummyArray.map((item) => {
            return item.date?.map((dateItem, index) => {
                aa = {
                    ...aa,
                    date: dateItem,
                    btc: item.btc[index],
                    eth: item.eth[index],
                };
                return aa;
            });
        })[0];
    }

    useEffect(() => {
        if (chartData.length > 0) {
            let coinData = serializeData();
            setData(coinData);
        }
    }, [chartData]);

    console.log("data", data);

    return (
        <>
            {chartData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
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
                    </AreaChart>
                </ResponsiveContainer>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
}
