/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import Carousel from "react-material-ui-carousel";
import axios from "axios";
import { Paper } from "@material-ui/core";
import { useQuery } from "react-query";
import { axiosRandomQuotesInstance } from "@api/axiosInstance";
import { useEffect, useState } from "react";

function CarouselItem(props) {
    return (
        <Paper>
            <h3>{props.author}</h3>
            <img
                src={props.image}
                alt={props.author}
                height="300px"
                width="300px"
            />
            <h6>{props.content}</h6>
        </Paper>
    );
}

function useRandomImages() {
    return useQuery("randomImages", async () => {
        const { data } = await axios.get("/api/get-random-images");
        const randomImages = data.data.photos;
        return randomImages;
    });
}

function useRandomQuotes() {
    return useQuery("randomQuotes", async () => {
        const { data } = await axiosRandomQuotesInstance.get("/quotes?limit=3");
        const randomQuotes = data.results;
        return randomQuotes;
    });
}

export default function Slider() {
    const [slideData, setSlideData] = useState([]);
    const { status: quoteStatus, data: randomQuotes } = useRandomQuotes();
    const { status: imageStatus, data: randomImage } = useRandomImages();

    let slideArray = [];

    useEffect(() => {
        if (quoteStatus === "success") {
            randomQuotes?.map((quote, index) => {
                slideArray[index] = {
                    ...slideArray[index],
                    author: quote.author,
                    content: quote.content,
                };
                setSlideData([slideArray]);
            });
        }
        if (imageStatus === "success") {
            randomImage.map((image, index) => {
                slideArray[index] = {
                    ...slideArray[index],
                    image: image.src.small,
                };
                setSlideData([slideArray]);
            });
        }
    }, [randomQuotes, randomImage]);

    console.log("slideData", slideData);

    return (
        <>
            {slideData.length > 0 && (
                <Carousel>
                    {slideData.map((slide) => (
                        <CarouselItem key={slide.name} slide={slide} />
                    ))}
                </Carousel>
            )}
        </>
    );
}
