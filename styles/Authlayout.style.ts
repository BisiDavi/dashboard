import { makeStyles } from "@material-ui/core";

export const AuthStyles = makeStyles((theme) => ({
    container: {
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        margin: "auto",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        justifyContent: "center",
    },
    "& h1": {
        textAlign: "center",
    },
    content: {
        margin: theme.spacing(4, 0),
        width: "100%",
    },
    authGrid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    gridContainer: {
        justifyContent: "center",
    },
    logoPaper: {
        padding: 20,
    },
}));
