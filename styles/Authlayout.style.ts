import { makeStyles } from "@material-ui/core";

export const AuthStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        margin: "auto",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: 0,
        justifyContent: "center",
    },
    "& h1": {
        textAlign: "center",
    },
    content: {
        margin: theme.spacing(1, 0),
        width: "100%",
    },
    authGrid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    gridContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        display: "flex",
    },
    logoPaper: {
        padding: 20,
    },
    authImage: {
        width: "100%",
        "> div": {
            position: "unset",
        },
    },
    image: {
        objectFit: "contain",
        width: "100% !important",
        position: "relative",
        height: "unset !important",
    },
    [theme.breakpoints.down("sm")]: {
        gridImage: {
            display: "none",
        },
    },
}));
