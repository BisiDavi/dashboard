import { Grid, Card } from "@material-ui/core";
import { newsCardStyle } from "@styles/NewsCard.style";
import NewsLoader from "./NewsLoader";

export default function HeadlineLoader() {
    const preloadSix = new Array(6).fill(0);
    const classes = newsCardStyle();

    return (
        <>
            {preloadSix.map((_, index) => (
                <Grid item xs={4} key={index}>
                    <Card elevation={2} className={classes.card}>
                        <NewsLoader />
                    </Card>
                </Grid>
            ))}
        </>
    );
}
