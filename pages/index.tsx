import Pagelayout from "@layouts/Pagelayout";
import { Grid } from "@material-ui/core";
import dynamic from "next/dynamic";
import CoinRate from "@components/charts/CoinRate";
import CryptoLineChart from "../components/charts/LineChart";

const HeadlineNews = dynamic(() => import("../components/HeadlineNews"));

export default function index() {
    return (
        <Pagelayout title="Welcome">
            <Grid container spacing={4}>
                <CoinRate />
                <CryptoLineChart />
                <Grid item xs={12}>
                    <HeadlineNews newsCategory="technology" count={6} />
                </Grid>
            </Grid>
        </Pagelayout>
    );
}
