import Pagelayout from "@layouts/Pagelayout";
import { Grid } from "@material-ui/core";
import PieChartWithAngle from "@components/charts/PieChart";
import CoinRate from "@components/charts/CoinRate";
import CryptoLineChart from "../components/charts/LineChart";
import HeadlineNews from "@components/HeadlineNews";
//import { StockChart } from "react-financial-charts";

export default function index() {
    return (
        <Pagelayout title="Welcome">
            <Grid container spacing={4}>
                <CoinRate />
                <CryptoLineChart />
                <Grid item xs={12}>
                    <HeadlineNews />
                </Grid>
                <Grid item xs={4}>
                    <PieChartWithAngle />
                </Grid>
            </Grid>
        </Pagelayout>
    );
}
