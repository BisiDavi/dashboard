import Pagelayout from "@layouts/Pagelayout";
import dynamic from "next/dynamic";
import CoinRate from "@components/charts/CoinRate";

const HeadlineNews = dynamic(() => import("../components/HeadlineNews"));
const CryptoLineChart = dynamic(() => import("../components/charts/LineChart"));

export default function index() {
    return (
        <Pagelayout title="Welcome">
            <CoinRate />
            <CryptoLineChart />
            <HeadlineNews newsCategory="technology" count={6} />
        </Pagelayout>
    );
}
