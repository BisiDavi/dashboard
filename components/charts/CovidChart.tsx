/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "react-query";
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
import { toast } from "react-toastify";

import ThreeDots from "@components/ThreeDotsLoader";
import { chartStyles } from "@styles/Chart.style";
import covid19AxiosInstance from "@api/covid19AxiosInstance";

function useCovidData() {
    return useQuery("covidChart", async () => {
        const { data } = await covid19AxiosInstance.get("/summary");
        return data;
    });
}

export default function CovidChart() {
    const { data, status } = useCovidData();

    const classes = chartStyles();

    return (
        <Grid container className={classes.lineChart}>
            <Typography className={classes.title} component="h3">
                Covid 19 Summary chart till date.{" "}
                <a
                    target="_blank"
                    rel="noreferrer"
                    className={classes.link}
                    href="https://covid19api.com"
                >
                    Credit: covid19api.com
                </a>
            </Typography>
            <Divider className={classes.divider} />
            <Grid container className={classes.chart}>
                {status === "loading" ? (
                    <ThreeDots />
                ) : status === "error" ? (
                    toast.error(
                        `oops network error occured, unable to fetch covid data`,
                        {
                            autoClose: false,
                        },
                    )
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            width={500}
                            height={400}
                            data={data?.Countries}
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
                                    position: "unset",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "10px auto",
                                    height: "auto",
                                    backgroundColor: "#f5f5f5",
                                    border: "1px solid #d5d5d5",
                                    borderRadius: 3,
                                    lineHeight: "40px",
                                    width: "50%",
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
                )}
            </Grid>
        </Grid>
    );
}
