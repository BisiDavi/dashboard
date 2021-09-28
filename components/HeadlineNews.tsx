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
    query?: string;
    title?: string;
}

export default function HeadlineNews({
    newsCategory,
    count,
    query,
    title,
}: HeadlineNewsProps) {
    const [headlineNews, setHeadlineNews] = useState<contentType[]>([]);
    const isQuery = query ? `/${query}` : "";

    useEffect(() => {
        if (headlineNews.length === 0) {
            axios
                .get(`/api/news/${newsCategory}${isQuery}`)
                .then((response) => {
                    const { result } = response.data;
                    const filteredArticles = result.articles.filter(
                        (article) =>
                            article.urlToImage &&
                            article.content &&
                            article.title &&
                            article.description,
                    );
                    const topHeadlines = filteredArticles.slice(0, count);
                    return setHeadlineNews(topHeadlines);
                })
                .catch((error) => {
                    console.log("error", error.response);
                });
        }
    }, [count, headlineNews, newsCategory, isQuery]);

    const classes = headlineNewsCardStyle();

    return (
        <Grid className={classes.headlineNews} container spacing={2}>
            <Grid item xs={12}>
                {title ? (
                    <Typography className={classes.title} component="h3">
                        {title}
                    </Typography>
                ) : (
                    <Typography className={classes.title} component="h3">
                        Top <span>{count}</span>{" "}
                        <span>{displayNewsTitle(newsCategory)} </span> Headlines
                    </Typography>
                )}
                <Divider className={classes.divider} />
            </Grid>
            {headlineNews.length > 0 ? (
                <Grid container spacing={2}>
                    {headlineNews.map((content: contentType) => (
                        <Grid
                            key={content.title}
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            lg={4}
                            xl={2}
                        >
                            <NewsCard content={content} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <HeadlineLoader count={count} />
            )}
        </Grid>
    );
}
