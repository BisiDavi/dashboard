import Pagelayout from "@layouts/Pagelayout";
import dynamic from "next/dynamic";

const CovidChart = dynamic(() => import("../components/charts/CovidChart"));

export default function Covid19() {
    return (
        <Pagelayout title="Covid-19">
            <h1>Covid19 page</h1>
            <CovidChart />
        </Pagelayout>
    );
}
