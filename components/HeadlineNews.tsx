import { useState, useEffect } from "react";
import axios from "axios";
import { NewsCard, HeadlineLoader } from "@components/.";
import { Grid, Typography, Divider } from "@material-ui/core";
import { contentType } from "../types/.";
import { headlineNewsCardStyle } from "@styles/HeadlineNews.style";

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

    const classes = headlineNewsCardStyle();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography className={classes.title} component="h3">
                    Top 6 Tech Headlines
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
                <HeadlineLoader />
            )}
        </Grid>
    );
}
