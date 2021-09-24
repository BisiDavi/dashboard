import { useState, useEffect } from "react";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import { Grid, Divider, Typography } from "@material-ui/core";
import useError from "@hooks/useError";
import ThreeDots from "@components/ThreeDotsLoader";
import { chartStyles } from "@styles/Chart.style";
//import covidData from "@json/covid19.json";
import covid19AxiosInstance from "@api/covid19AxiosInstance";

export default function CovidChart() {
    const [chartData, setChartData] = useState<any>([]);

    const classes = chartStyles();

    useEffect(() => {
        if (chartData.length === 0) {
            covid19AxiosInstance
                .get("/summary")
                .then((response) => {
                    console.log("response", response.data);
                    setChartData(response.data);
                })
                .catch((error) => {
                    console.log("error", error);
                    //onError(error);
                });
        }
    }, [chartData]);

    return (
        <Grid container className={classes.lineChart}>
            <Typography className={classes.title} component="h3">
                Covid 19 Summary chart till date.{" "}
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://covid19api.com"
                >
                    Credit: covid19api.com
                </a>
            </Typography>
            <Divider className={classes.divider} />
            <Grid container className={classes.chart}>
                {chartData ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            width={500}
                            height={400}
                            data={chartData}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Country" />
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
                            <Area
                                type="monotone"
                                dataKey="NewConfirmed"
                                stroke="blue"
                                fill="blue"
                                activeDot={{ r: 8 }}
                            />
                            <Area
                                type="monotone"
                                dataKey="TotalConfirmed"
                                label="Total Confirmed"
                                legendType="star"
                                stroke="red"
                                fill="red"
                                activeDot={{ r: 8 }}
                            />
                            <Area
                                type="monotone"
                                dataKey="NewDeaths"
                                stroke="brown"
                                fill="brown"
                                activeDot={{ r: 8 }}
                            />
                            <Area
                                type="monotone"
                                dataKey="TotalDeaths"
                                stroke="pink"
                                fill="pink"
                            />
                            <Area
                                type="monotone"
                                dataKey="NewRecovered"
                                stroke="lime"
                                fill="lime"
                            />
                            <Area
                                type="monotone"
                                dataKey="TotalRecovered"
                                stroke="green"
                                fill="green"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                ) : (
                    <ThreeDots />
                )}
            </Grid>
            {/*<Grid item>
                {error && chartData.length === 0 && displayError()}
            </Grid>*/}
        </Grid>
    );
}
