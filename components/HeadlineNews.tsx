/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import axios from "axios";
import { NewsCard, HeadlineLoader } from "@components/.";
import { Grid, Typography, Divider } from "@material-ui/core";
import { contentType, newsCategoryType } from "../types/.";
import { headlineNewsCardStyle } from "@styles/HeadlineNews.style";
import displayNewsTitle from "@utils/displayNewsTitle";

interface HeadlineNewsProps {
    newsCategory: newsCategoryType;
    count: number;
}

export default function HeadlineNews({
    newsCategory,
    count,
}: HeadlineNewsProps) {
    const [headlineNews, setHeadlineNews] = useState<contentType[]>([]);
    useEffect(() => {
        if (headlineNews.length === 0) {
            axios
                .get(`/api/news/${newsCategory}`)
                .then((response) => {
                    const { result } = response.data;
                    const topHeadlines = result.articles.slice(0, count);
                    return setHeadlineNews(topHeadlines);
                })
                .catch((error) => {
                    console.log("error", error.response);
                });
        }
    }, [headlineNews]);

    const classes = headlineNewsCardStyle();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography className={classes.title} component="h3">
                    Top <span>{count}</span>{" "}
                    <span>{displayNewsTitle(newsCategory)} </span> Headlines
                </Typography>
                <Divider className={classes.divider} />
            </Grid>
            {headlineNews.length > 0 ? (
                headlineNews.map((content: contentType) => (
                    <Grid xs={4} key={content.title} item>
                        <NewsCard content={content} />
                    </Grid>
                ))
            ) : (
                <HeadlineLoader count={count} />
            )}
        </Grid>
    );
}
