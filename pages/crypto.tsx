import Pagelayout from "@layouts/Pagelayout";
import { Grid } from "@material-ui/core";
import HeadlineNews from "@components/HeadlineNews";

export default function Crypto() {
    return (
        <Pagelayout title="Crypto">
            <Grid container>
                <Grid item xs={12}>
                    <HeadlineNews
                        newsCategory="business"
                        query="crypto"
                        title="Top Crypto news"
                        count={6}
                    />
                </Grid>
            </Grid>
        </Pagelayout>
    );
}
