import { makeStyles } from "@material-ui/core";

export const inventoryStyles = makeStyles((theme) => ({
    iconButton: {
        backgroundColor: theme.palette.primary.dark,
        color: "white",
        position: "absolute",
        right: "15px",
        top: "0px",
        padding: 10,
        "& svg": {
            fontSize: "2em",
        },
    },
    inventoryContainer: {
        position: "relative",
    },
    inventoryFormGrid: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    inventoryForm: {},
    form: {
        padding: 20,
    },
    button: {
        backgroundColor: theme.palette.primary.dark,
        color: "white",
    },
}));
