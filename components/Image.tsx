/* eslint-disable @next/next/no-img-element */
import RenderSmoothImage from "render-smooth-image-react";
import "render-smooth-image-react/build/style.css";

export default function Image(props) {
    return <RenderSmoothImage loading="lazy" src={props.src} alt={props.alt} />;
}
