import { makeStyles } from "@material-ui/core";

export const headlineNewsCardStyle = makeStyles((theme) => ({
    title: {
        fontWeight: 800,
        marginTop: 20,
        marginBottom: 10,
    },
    divider: {
        marginBottom: 10,
    },
    headlineNews: {
        flexDirection: "column",
    },
    newsGrid: {
        display: "flex",
    },
}));
