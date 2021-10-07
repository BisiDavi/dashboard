import { makeStyles, Theme } from "@material-ui/core";

export const sliderStyles = makeStyles((theme: Theme) => ({
    gridItem: {
        position: "relative",
        height: "350px",
        width: "350px",
    },
    overlay: {
        backgroundColor: "#1514147a",
        position: "absolute",
        top: 0,
        left: 0,
        height: "350px",
        width: "100%",
        zIndex: 20,
        borderRadius: "20px",
    },
    image: {
        borderRadius: "20px",
        zIndex: 1,
        position: "relative",
        margin: "auto",
    },
    slide: {
        display: "flex",
        alignItems: "center",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "20px",
        zIndex: 50,
    },
    author: {
        color: "white",
        textAlign: "center",
        fontSize: "16px",
        zIndex: 30,
        position: "absolute",
        top: 0,
    },
    content: {
        fontSize: "18px",
        textAlign: "center",
        zIndex: 30,
        position: "absolute",
        color: "white",
    },
}));
