import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "@components/NewsCard";
import { Grid } from "@material-ui/core";
import { contentType } from "@types/.";

export default function HeadlineNews() {
    const [headlineNews, setHeadlineNews] = useState<contentType[]>([]);
    useEffect(() => {
        if (headlineNews.length === 0) {
            axios
                .get("/api/news-api")
                .then((response) => {
                    const { result } = response.data;
                    const topSixHeadlines = result.articles.slice(0, 6);
                    return setHeadlineNews(topSixHeadlines);
                })
                .catch((error) => {
                    console.log("error", error.response);
                });
        }
    }, [headlineNews]);
    console.log("headlineNews", headlineNews);
    return (
        <Grid container spacing={2}>
            {headlineNews.map((content: contentType) => {
                console.log("content", content);
                return (
                    <Grid xs={4} key={content.title} item>
                        <NewsCard content={content} />
                    </Grid>
                );
            })}
        </Grid>
    );
}
