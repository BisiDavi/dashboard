import { makeStyles } from "@material-ui/core";

export const headerStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.dark,
    },
    gridContainer: {
        justifyContent: "space-between",
        width: "100%",
    },
    gridItem: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
    },
    logo: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    logout: {
        color: "red",
    },
    email: {
        fontWeight: "bold",
    },
    menuGroup: {
        "& img": {
            borderRadius: "50%",
        },
        flexDirection: "row",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "10px",
    },
    [theme.breakpoints.up("md")]: {
        menu: {
            display: "none",
        },
    },
    [theme.breakpoints.down("xs")]: {
        menuGroup: {
            display: "none",
        },
        gridItem: {
            "& button": {
                fontSize: 14,
            },
        },
        email: {
            display: "none",
        },
    },
}));
