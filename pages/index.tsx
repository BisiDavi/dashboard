import dynamic from "next/dynamic";
import { useSession } from "next-auth/client";
import CoinRate from "@components/charts/CoinRate";
import Pagelayout from "@layouts/Pagelayout";

const HeadlineNews = dynamic(() => import("../components/HeadlineNews"));
const CryptoLineChart = dynamic(() => import("../components/charts/LineChart"));

export default function Index() {
    const [session] = useSession();
    return (
        <Pagelayout title="Welcome">
            <CoinRate />
            <CryptoLineChart />
            <HeadlineNews newsCategory="technology" count={6} />
        </Pagelayout>
    );
}

Index.auth = true;
