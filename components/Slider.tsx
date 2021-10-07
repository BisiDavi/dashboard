/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import Carousel from "react-material-ui-carousel";
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { useQuery } from "react-query";
import { axiosRandomQuotesInstance } from "@api/axiosInstance";
import { sliderStyles } from "@styles/Slider.style";

function CarouselItem(slide) {
    const classes = sliderStyles();
    return (
        <div className={classes.slide}>
            <div className={classes.overlay}></div>
            <h3 className={classes.author}>Author: {slide.slide.author}</h3>
            <img
                src={slide.slide.image}
                alt={slide.slide.author}
                className={classes.image}
            />
            <h6 className={classes.content}>{slide.slide.content}</h6>
        </div>
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
                    image: image.src.medium,
                };
                setSlideData([slideArray]);
            });
        }
    }, [randomQuotes, randomImage]);

    const classes = sliderStyles();

    return (
        <Grid container>
            <Grid item lg={8}></Grid>
            <Grid className={classes.gridItem} item lg={4}>
                {slideData[0]?.length > 0 && (
                    <Carousel>
                        {slideData[0].map((slide) => (
                            <CarouselItem key={slide.author} slide={slide} />
                        ))}
                    </Carousel>
                )}
            </Grid>
        </Grid>
    );
}
