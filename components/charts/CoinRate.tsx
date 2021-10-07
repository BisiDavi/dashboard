/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Divider, Typography } from "@material-ui/core";
import { toast } from "react-toastify";
import { useQuery, useQueryClient } from "react-query";

import ViewCard from "@components/ViewCard";
import axios from "axios";
import { coinRateStyles } from "@styles/CoinRate.style";
import CryptoContentLoader from "@components/cryptoContentLoader";

function useCoinRate() {
    return useQuery("coinRate", async () => {
        const { data } = await axios.get("/api/get-coin-rate");
        return data;
    });
}

export default function CoinRate() {
    const classes = coinRateStyles();
    const { status, data, } = useCoinRate();
    console.log("data", data);

    return (
        <Grid container className={classes.coinRate}>
            <Typography className={classes.title} component="h3">
                Top 6 Cryptocurrencies (Source :{" "}
                <a rel="noreferrer" target="_blank" href="https://nomics.com/">
                    Nomics
                </a>
                )
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={2}>
                {status === "loading" ? (
                    <CryptoContentLoader />
                ) : status === "error" ? (
                    toast.error(`oops, an error just occured`)
                ) : (
                    data.data.map((coin) => (
                        <Grid
                            key={coin.id}
                            item
                            xs={12}
                            sm={6}
                            xl={2}
                            lg={2}
                            md={4}
                        >
                            <ViewCard>
                                <div className={classes.row}>
                                    <Typography
                                        className={classes.title}
                                        component="h3"
                                    >
                                        {coin.name}
                                    </Typography>
                                    <img
                                        alt={coin.currency}
                                        src={coin.logo_url}
                                        height="50"
                                        width="50"
                                    />
                                </div>
                                <Typography className={classes.rate}>
                                    1 {coin.currency} ={" "}
                                    {Math.round(coin.price * 100) / 100}{" "}
                                    <span>USD</span>
                                </Typography>
                                <div className={classes.row}>
                                    Rank:{" "}
                                    <Typography component="h5">
                                        {coin.rank}
                                    </Typography>
                                </div>
                            </ViewCard>
                        </Grid>
                    ))
                )}
            </Grid>
        </Grid>
    );
}
