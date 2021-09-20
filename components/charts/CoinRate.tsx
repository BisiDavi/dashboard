import { useEffect, useState } from "react";
import Image from "next/image";
import ViewCard from "@components/ViewCard";
import { Grid,Divider, Typography } from "@material-ui/core";
import cryptoAxiosInstance from "@api/crypto/cryptoAxiosInstance";
import { coinRateStyles } from "@styles/CoinRate.style";
import CryptoContentLoader from "@api/crypto/cryptoContentLoader";

export default function CoinRate() {
    const [coins, setCoins] = useState([]);
    const classes = coinRateStyles();
    useEffect(() => {
        cryptoAxiosInstance
            .get("/ticker?interval=1d&convert=USD&per-page=6&page=1")
            .then((response) => {
                setCoins(response.data);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);

    return (
        <>
            <Typography className={classes.title} component="h3">
                Top 6 CryptoCurrencies
            </Typography>
            <Divider className={classes.divider} />
            {coins.length > 0 ? (
                <Grid container spacing={2}>
                    {coins.map((coin) => (
                        <Grid key={coin.id} item xs={2}>
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
                    ))}
                </Grid>
            ) : (
                <CryptoContentLoader />
            )}
        </>
    );
}
