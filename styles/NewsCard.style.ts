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
        justifyContent: "flex-start",
				height:300
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
    },
    description: {
        fontSize: "14px",
        fontFamily: "Roboto",
    },
    image: {
        margin: "10px auto",
        "& img": {
            height: "100%",
            width: "100%",
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
}));
