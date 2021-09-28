import { makeStyles } from "@material-ui/core";

export const newsCardStyle = makeStyles((theme) => ({
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        "&:hover": {
            cursor: "pointer",
        },
    },
    newsLoader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: 10,
    },
    gridHeadline: {
        width: "100%",
    },
    headlineLoader: {
        flexDirection: "row",
    },
    row1: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "5px 0px",
    },
    italic: {
        fontStyle: "italic",
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Roboto",
        margin: "10px auto",
        fontSize: "16px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
    },
    description: {
        fontSize: "14px",
        fontFamily: "Roboto",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical",
    },
    image: {
        margin: "10px auto",
        width: "100%",
        height: "250px",
        "& img": {
            width: "100%",
            height: "100%",
        },
    },
    cardAction: {
        justifyContent: "space-between",
        width: "100%",
    },
    paper: {
        padding: 15,
        "& p": {
            fontSize: "13px",
        },
    },
    readMore: {
        color: "red",
        fontSize: "11px",
        fontWeight: "bold",
    },
    [theme.breakpoints.down("sm")]: {
        cardAction: {
            "& button": {
                fontSize: 11,
            },
            "& h6": {
                fontSize: 11,
            },
        },
        italic: {
            fontSize: 11,
        },
        image: {
            height: "200px",
        },
    },
}));
