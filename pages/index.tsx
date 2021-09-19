import Pagelayout from "@layouts/Pagelayout";
import ViewCard from "@components/ViewCard";
import { Grid, Typography } from "@material-ui/core";

type cardContentType = {
    btnVariant: "outlined" | "contained" | "text";
    title: string;
    info: string;
    btnText: string;
    icon: string;
};

export default function index() {
    const cardContent: cardContentType[] = [
        {
            btnVariant: "outlined",
            title: "0.229 BTC",
            info: "Weekly earnings",
            btnText: "See More",
            icon: "arrowRight",
        },
        {
            btnVariant: "outlined",
            title: "0.229 BTC",
            info: "Weekly earnings",
            btnText: "See More",
            icon: "arrowRight",
        },
    ];
    return (
        <Pagelayout>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <div>
                        <Typography component="h3">OVERVIEW</Typography>
                        <Typography component="h1">
                            Good Morning, Olubisi
                        </Typography>
                        <Typography component="p">
                            Here&#39;s the number of people that visited this
                            site from google analytics
                        </Typography>
                    </div>
                </Grid>
                {cardContent.map((content, index) => (
                    <Grid key={index} item xs={6}>
                        <ViewCard content={content}>
                            <Typography component="h1">
                                {content.title}
                            </Typography>
                            <Typography component="p">
                                {content.info}
                            </Typography>
                        </ViewCard>
                    </Grid>
                ))}
            </Grid>
        </Pagelayout>
    );
}
