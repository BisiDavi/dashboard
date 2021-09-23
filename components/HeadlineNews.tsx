import React, { useState, useEffect } from "react";
import NewsCard from "@components/NewsCard";
import { Grid } from "@material-ui/core";
import newsAxiosInstance from "../api/news/newsAxiosInstance";

export default function HeadlineNews() {
    const [headlineNews, setHeadlineNews] = useState([]);
    useEffect(() => {
        if (headlineNews.length === 0) {
            newsAxiosInstance
                .get("/top-headlines?country=us&category=technology")
                .then((response) => {
                    console.log("response", response.data);
                    const topSixHeadlines = response.data.articles.slice(0, 6);
                    return setHeadlineNews(topSixHeadlines);
                })
                .catch((error) => {
                    console.log("error", error.response);
                });
        }
    }, [headlineNews]);
    return (
        <Grid container spacing={2}>
            {headlineNews.map((news) => (
                <Grid xs={3} key={news.title} item>
                    <NewsCard content={news} />
                </Grid>
            ))}
        </Grid>
    );
}
