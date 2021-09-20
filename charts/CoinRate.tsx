import React, { useEffect, useState } from "react";
import Image from "next/image";
import axiosInstance from "api/axiosInstance";
import ViewCard from "@components/ViewCard";
import { Typography } from "@material-ui/core";

export default function CoinRate() {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        axiosInstance
            .get(
                "/ticker?ids=BTC,ETH,XRP,ADA,BNB,&interval=1d&convert=USD&per-page=100&page=1",
            )
            .then((response) => {
                console.log("coin rate response", response.data);
                setCoins(response.data);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }, []);
    return (
        <>
            {coins.map((coin) => (
                <ViewCard key={coin.id}>
                    <Typography component="h3">{coin.name}</Typography>
                    <Image
                        alt={coin.currency}
                        src={coin.logo_url}
                        layout="responsive"
                        height="100"
                        width="100"
                    />
                    <Typography>
                        1 {coin.currency} = {Math.round(coin.price)}{" "}
                        <span>USD</span>
                    </Typography>
                    <div>
                        Rank:{" "}
                        <Typography component="h5">{coin.rank}</Typography>
                    </div>
                </ViewCard>
            ))}
            {JSON.stringify(coins)}
        </>
    );
}
