import Pagelayout from "@layouts/Pagelayout";
import { Grid } from "@material-ui/core";
import HeadlineNews from "@components/HeadlineNews";
import { newsCategoryType } from "../types";

export default function News() {
    const newsCategories: newsCategoryType[] = [
        "health",
        "business",
        "sports",
        "entertainment",
    ];
    return (
        <Pagelayout title="News">
            <Grid container>
                {newsCategories.map((newsCategory) => (
                    <Grid item key={newsCategory} xs={12}>
                        <HeadlineNews newsCategory={newsCategory} count={3} />
                    </Grid>
                ))}
            </Grid>
        </Pagelayout>
    );
}
