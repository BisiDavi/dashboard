import Pagelayout from "@layouts/Pagelayout";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import CoinRate from "@components/charts/CoinRate";

const HeadlineNews = dynamic(() => import("../components/HeadlineNews"));
const CryptoLineChart = dynamic(() => import("../components/charts/LineChart"));

export default function Index() {
    const [session, loading] = useSession();
    const router = useRouter();

    console.log("session", session);

    !session && router.push("/auth");
    return (
        <Pagelayout title="Welcome">
            <CoinRate />
            <CryptoLineChart />
            <HeadlineNews newsCategory="technology" count={6} />
        </Pagelayout>
    );
}
