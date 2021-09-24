/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import {
    Card,
    Button,
    Typography,
    Paper,
    CardActions,
    CardContent,
} from "@material-ui/core";
import formatDate from "@utils/formatDate";
import { newsCardStyle } from "@styles/NewsCard.style";
import { NewsCardProps } from "../types/.";

export default function NewsCard({ content }: NewsCardProps) {
    const [newsDetails, showNewsDetails] = useState(false);
    const [articleImage, setArticleImage] = useState(null);

    const cardHeight = articleImage ? "550px" : "230px";

    useEffect(() => {
        if (content.urlToImage) {
            setArticleImage(true);
        }
    }, [content.urlToImage]);

    function showNewsDetailsHandler() {
        return showNewsDetails(!newsDetails);
    }
    const classes = newsCardStyle();
    return (
        <>
            <Card
                style={{ height: cardHeight }}
                elevation={2}
                className={classes.card}
                onClick={showNewsDetailsHandler}
            >
                <CardContent>
                    <div className={classes.row1}>
                        {content.author && (
                            <Typography
                                className={classes.italic}
                                component="h6"
                            >
                                {content.author}
                            </Typography>
                        )}
                        {content.source.name && (
                            <Typography
                                className={classes.italic}
                                component="h6"
                            >
                                {content.source.name}
                            </Typography>
                        )}
                    </div>
                    {content.urlToImage && (
                        <div className={classes.image}>
                            <img alt={content.title} src={content.urlToImage} />
                        </div>
                    )}
                    <Typography className={classes.title} component="h1">
                        {content.title}
                    </Typography>
                    {content.description && (
                        <Typography
                            className={classes.description}
                            component="h6"
                        >
                            {content.description}
                        </Typography>
                    )}
                </CardContent>
                <CardActions className={classes.cardAction}>
                    <div>
                        <a target="_blank" rel="noreferrer" href={content.url}>
                            <Button variant="outlined">View source</Button>
                        </a>
                    </div>
                    <div>
                        <Typography className={classes.italic} component="h6">
                            Published at {formatDate(content.publishedAt)}{" "}
                        </Typography>
                    </div>
                </CardActions>
            </Card>
            {newsDetails && content.content && (
                <Paper className={classes.paper}>
                    <Typography component="p">
                        {content.content.replace(/ *\[[^)]*\] */g, "")}
                    </Typography>
                    <a
                        className={classes.readMore}
                        target="_blank"
                        rel="noreferrer"
                        href={content.url}
                    >
                        Read more
                    </a>
                </Paper>
            )}
        </>
    );
}
