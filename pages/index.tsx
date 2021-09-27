import Pagelayout from "@layouts/Pagelayout";
import { Grid } from "@material-ui/core";
import dynamic from "next/dynamic";
import CoinRate from "@components/charts/CoinRate";
import CryptoLineChart from "../components/charts/LineChart";

const HeadlineNews = dynamic(() => import("../components/HeadlineNews"));

export default function index() {
    return (
        <Pagelayout title="Welcome">
            <CoinRate />
            <CryptoLineChart />
            <HeadlineNews newsCategory="technology" count={6} />
        </Pagelayout>
    );
}
