import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Card,
    Button,
    Typography,
    Paper,
    CardActions,
    CardContent,
} from "@material-ui/core";
import formatDate from "@utils/formatDate";

interface NewsCardProps {
	content {
    author?: string;
    source: {
        id?: string;
        name?: string;
    };
    title: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt?: string;
    content?: string;
	}
}

export default function NewsCard({ content }: NewsCardProps) {
    const [newsDetails, showNewsDetails] = useState(false);

    function showNewsDetailsHandler() {
        return showNewsDetails(!newsDetails);
    }
    return (
        <div>
            <Card onClick={showNewsDetailsHandler}>
                <CardContent>
                    <div>
                        {content.author && (
                            <Typography>{content.author}</Typography>
                        )}
                        {content.source.name && (
                            <Typography>{content.source.name}</Typography>
                        )}
                    </div>
                    {content.urlToImage && (
                        <Image
                            alt={content.title}
                            height={150}
                            width={150}
                            src={content.urlToImage}
                        />
                    )}
                    <Typography component="h3">{content.title}</Typography>
                    {content.description && (
                        <Typography component="h6">
                            {content.description}
                        </Typography>
                    )}
                </CardContent>
                <CardActions>
                    <div>
                        <a rel="_blank" href={content.url}>
                            <Button>View source</Button>
                        </a>
                    </div>
                    <div>
                        <Typography component="h6">
                            Published at {formatDate(content.publishedAt)}{" "}
                        </Typography>
                    </div>
                </CardActions>
            </Card>
            {newsDetails &&
                content.content(
                    <Paper>
                        <Typography>{content.content}</Typography>
                    </Paper>,
                )}
        </div>
    );
}
