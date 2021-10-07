import { Grid, Divider, Typography } from "@material-ui/core";
import { useQuery } from "react-query";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { toast } from "react-toastify";

import ThreeDots from "@components/ThreeDotsLoader";
import { chartStyles } from "@styles/Chart.style";

function useCryptoData() {
    return useQuery("crpytoGraph", async () => {
        const { data } = await axios.get("/api/compare-coin");
        return data;
    });
}

export default function CryptoAreaChart() {
    const { data, status } = useCryptoData();
    const chartData = data?.data;

    const classes = chartStyles();

    const convertToDate = (itemDate) => new Date(itemDate).toLocaleDateString();
    let dummyArray = [];
    const cryptoData = (coinName) =>
        chartData.filter((data) => data.currency === coinName);

    function coinObject(name) {
        const cryptoCoin = cryptoData(name);
        const key = name.toLocaleLowerCase();
        return chartData.length !== 0
            ? {
                  date: cryptoCoin.map((coin) =>
                      coin.timestamps.map((timestamp) =>
                          convertToDate(timestamp),
                      ),
                  )[0],
                  [key]: cryptoCoin.map((coin) =>
                      coin.prices.map((price) => price),
                  )[0],
              }
            : [];
    }

    let aa = {};
    function serializeData() {
        dummyArray = [
            ...dummyArray,
            { ...coinObject("BTC"), ...coinObject("ETH") },
        ];
        return dummyArray.map((item) => {
            return item.date.map((dateItem, index) => {
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

    const cryptoChartData = data ? serializeData() : [];

    return (
        <Grid container className={classes.lineChart}>
            <Typography className={classes.title} component="h3">
                Bitcoin (BTC) and Etherum (ETH) Chart
            </Typography>
            <Divider className={classes.divider} />
            <Grid container className={classes.chart}>
                {status === "loading" ? (
                    <ThreeDots />
                ) : status === "error" ? (
                    toast.error("an error occured")
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            width={500}
                            height={400}
                            data={cryptoChartData}
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
                            <Legend
                                width={100}
                                wrapperStyle={{
                                    top: 150,
                                    right: 40,
                                    backgroundColor: "#f5f5f5",
                                    border: "1px solid #d5d5d5",
                                    borderRadius: 3,
                                    lineHeight: "40px",
                                }}
                            />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="btc"
                                stroke="#8884d8"
                                fill="#8884d8"
                                activeDot={{ r: 8 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="eth"
                                stroke="#82ca9d"
                                fill="#82ca9d"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </Grid>
        </Grid>
    );
}
