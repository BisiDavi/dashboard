import dynamic from "next/dynamic";
import CoinRate from "@components/charts/CoinRate";
import Pagelayout from "@layouts/Pagelayout";
import Slider from "@components/Slider";

const HeadlineNews = dynamic(() => import("../components/HeadlineNews"));
const CryptoLineChart = dynamic(() => import("../components/charts/LineChart"));

export default function Index() {
    return (
        <Pagelayout title="Welcome">
            <Slider />
            <CoinRate />
            {/*<CryptoLineChart />*/}
            <HeadlineNews newsCategory="technology" count={6} apiName="tech" />
        </Pagelayout>
    );
}

Index.auth = true;
