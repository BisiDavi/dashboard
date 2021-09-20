import { makeStyles } from "@material-ui/core";

export const chartStyles = makeStyles((theme) => ({
    title: {
        fontFamily: "Roboto",
        fontWeight: 800,
        marginTop: 20,
        marginBottom: 20,
    },
    divider: {
        marginBottom: 20,
    },
    chart: {
        justifyContent: "center",
        alignItems: "center",
        height: 400,
        display: "flex",
    },
}));
