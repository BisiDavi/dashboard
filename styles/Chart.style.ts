import { makeStyles } from "@material-ui/core";

export const chartStyles = makeStyles((theme) => ({
    title: {
        fontFamily: "Roboto",
        fontWeight: 800,
        marginTop: 20,
        marginBottom: 10,
    },
    divider: {
        marginBottom: 10,
    },
    chart: {
        justifyContent: "center",
        alignItems: "center",
        height: 400,
        display: "flex",
    },
    lineChart: {
        flexDirection: "column",
    },
    link: {
        color: "blue",
    },
}));
