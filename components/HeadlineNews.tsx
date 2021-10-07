import axios from "axios";
import { useQuery } from "react-query";
import { NewsCard, HeadlineLoader } from "@components/.";
import { Grid, Typography, Divider } from "@material-ui/core";
import { toast } from "react-toastify";

import { contentType, newsCategoryType } from "../types/.";
import { headlineNewsCardStyle } from "@styles/HeadlineNews.style";
import displayNewsTitle from "@utils/displayNewsTitle";

interface HeadlineNewsProps {
    newsCategory: newsCategoryType;
    count: number;
    query?: string;
    title?: string;
}

function useHeadlineNews(newsCategory, isQuery) {
    return useQuery("headlineNews", async () => {
        const { data } = await axios.get(`/api/news/${newsCategory}${isQuery}`);
        return data;
    });
}

export default function HeadlineNews({
    newsCategory,
    count,
    query,
    title,
}: HeadlineNewsProps) {
    const isQuery = query ? `/${query}` : "";
    const { status, data } = useHeadlineNews(newsCategory, isQuery);

    const errorText = query ? query : newsCategory;

    function formatResult(result) {
        const filteredArticles = result?.articles.filter(
            (article) =>
                article.urlToImage &&
                article.content &&
                article.title &&
                article.description,
        );
        const topHeadlines = filteredArticles?.slice(0, count);
        return topHeadlines;
    }
    const articles = formatResult(data?.result);

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
            {status === "loading" ? (
                <HeadlineLoader count={count} />
            ) : status === "error" ? (
                toast.error(
                    `oops network error occured, unable to fetch ${errorText} news`,
                    {
                        autoClose: false,
                    },
                )
            ) : (
                articles.map((content: contentType) => (
                    <Grid
                        key={content.title}
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                        xl={2}
                    >
                        <NewsCard content={content} />
                    </Grid>
                ))
            )}
        </Grid>
    );
}
