import Pagelayout from "@layouts/Pagelayout";
import { Grid } from "@material-ui/core";
import dynamic from "next/dynamic";
import PieChartWithAngle from "@components/charts/PieChart";
import CoinRate from "@components/charts/CoinRate";
//import HeadlineNews from "@components/HeadlineNews";
import CryptoLineChart from "../components/charts/LineChart";
//import { StockChart } from "react-financial-charts";

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
                <Grid item xs={4}>
                    <PieChartWithAngle />
                </Grid>
            </Grid>
        </Pagelayout>
    );
}
