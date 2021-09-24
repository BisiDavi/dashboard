/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import Loader from "@components/Loader";

export default function Image(props) {
    return (
        <Suspense fallback={<Loader />}>
            <img loading="lazy" src={props.src} alt={props.alt} />
        </Suspense>
    );
}
