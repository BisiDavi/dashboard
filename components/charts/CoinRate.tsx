/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import ViewCard from "@components/ViewCard";
import useError from "@hooks/useError";
import { Grid, Divider, Typography } from "@material-ui/core";
import cryptoAxiosInstance from "@api/cryptoAxiosInstance";
import { coinRateStyles } from "@styles/CoinRate.style";
import CryptoContentLoader from "@components/cryptoContentLoader";

export default function CoinRate() {
    const [coins, setCoins] = useState([]);
    const { error, onError, displayError } = useError();
    const classes = coinRateStyles();

    useEffect(() => {
        if (coins.length === 0) {
            axios
                .get("/api/get-coin-rate")
                .then((response) => {
                    console.log("response coin-rate", response.data.data);
                    setCoins(response.data.data);
                })
                .catch((error) => {
                    console.log("error", error);
                    //onError(error);
                });
        }
    }, [coins]);

    return (
        <Grid container className={classes.coinRate}>
            <Typography className={classes.title} component="h3">
                Top 6 Cryptocurrencies
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={2}>
                {coins.length > 0 ? (
                    coins.map((coin) => (
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
                                    <Image
                                        alt={coin.currency}
                                        src={coin.logo_url}
                                        layout="fixed"
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
                ) : (
                    <CryptoContentLoader />
                )}
            </Grid>
            <Grid>{error && coins.length === 0 && displayError()}</Grid>
        </Grid>
    );
}
