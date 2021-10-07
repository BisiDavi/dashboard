import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import dynamic from "next/dynamic";

import CoinRate from "@components/charts/CoinRate";
import Pagelayout from "@layouts/Pagelayout";

const HeadlineNews = dynamic(() => import("../components/HeadlineNews"));
const CryptoLineChart = dynamic(() => import("../components/charts/LineChart"));

export default function Index() {
    const router = useRouter();
    const [session, loading] = useSession();

    console.log("session", session);

    if (loading) {
        return "Loading";
    }

    return (
        <Pagelayout title="Welcome">
            <CoinRate />
            <CryptoLineChart />
            <HeadlineNews newsCategory="technology" count={6} />
        </Pagelayout>
    );
}

Index.auth = true;
