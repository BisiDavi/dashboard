/* eslint-disable @next/next/no-img-element */
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import React from "react";
import { useQuery } from "react-query";
import { ToastContainer } from "react-toastify";
import { newsAxiosInstance } from "@api/axiosInstance";
import { sliderStyles } from "@styles/Slider.style";
import formatDate from "@utils/formatDate";

function CarouselItem({ slide }) {
    const classes = sliderStyles();

    console.log("slide", slide);

    return (
        <a
            target="_blank"
            rel="noreferrer"
            href={slide.url}
            className={classes.newsSlide}
        >
            <Paper elevation={3} className={classes.paper}>
                <img
                    src={slide.image.thumbnail.contentUrl}
                    alt={slide.name}
                    className={classes.newsImage}
                />
                <div className={classes.news}>
                    <span className={classes.row}>
                        <h6>{formatDate(slide.datePublished)}</h6>
                        <h6>Source: {slide.provider[0].name}</h6>
                    </span>
                    <h4 className={classes.title}>{slide.name}</h4>
                    <h6 className={classes.newsContent}>{slide.description}</h6>
                </div>
            </Paper>
        </a>
    );
}

export default function NewsSlider() {
    const { data, status } = useQuery("newsSlider", newsAxiosInstance);
    const newsData = data && data.slice(0, 5);
    return (
        <>
            {status === "error" ? (
                <ToastContainer>Oops, network error</ToastContainer>
            ) : status === "loading" ? (
                <div>Loading</div>
            ) : (
                data && (
                    <Carousel
                        interval={5000}
                        animation="slide"
                        navButtonsAlwaysVisible
                    >
                        {newsData.map((slideData) => (
                            <CarouselItem
                                key={slideData.name}
                                slide={slideData}
                            />
                        ))}
                    </Carousel>
                )
            )}
        </>
    );
}
