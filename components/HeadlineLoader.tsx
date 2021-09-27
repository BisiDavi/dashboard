import { Grid, Card } from "@material-ui/core";
import { newsCardStyle } from "@styles/NewsCard.style";
import NewsLoader from "./NewsLoader";

interface HeadlineLoaderProps {
    count: number;
}

export default function HeadlineLoader({ count }: HeadlineLoaderProps) {
    const preloadSix = new Array(count).fill(0);
    const classes = newsCardStyle();

    return (
        <Grid container spacing={3} className={classes.headlineLoader}>
            {preloadSix.map((_, index) => (
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    xl={2}
                    key={index}
                    className={classes.gridHeadline}
                >
                    <Card elevation={2} className={classes.newsLoader}>
                        <NewsLoader />
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
