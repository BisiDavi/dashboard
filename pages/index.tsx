import Pagelayout from "@layouts/Pagelayout";
import { Grid } from "@material-ui/core";
import PieChartWithAngle from "@components/charts/PieChart";
import CoinRate from "@components/charts/CoinRate";
import CryptoLineChart from "../components/charts/LineChart";
//import { StockChart } from "react-financial-charts";

export default function index() {
    return (
        <Pagelayout>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <CoinRate />
                </Grid>
                <Grid item style={{ height: 400 }} xs={12}>
                    <CryptoLineChart />
                </Grid>
                <Grid item xs={4}>
                    <PieChartWithAngle />
                </Grid>
            </Grid>
        </Pagelayout>
    );
}
