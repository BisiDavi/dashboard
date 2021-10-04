import { makeStyles } from "@material-ui/core";

export const authCardStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(0, 3),
        width: "100%",
    },
    header: {
        display: "flex",
        alignItems: "center",
        fontFamily: "Nunito",
        justifyContent: "space-between",
        "& div": {
            flexDirection: "column",
            "& h1": {
                fontSize: theme.spacing(5),
                lineHeight: theme.spacing(1) * 0.25,
                fontWeight: "bold",
                textAlign: "center",
            },
            "& p": {
                fontSize: theme.spacing(2),
                textAlign: "center",
            },
        },
    },
    authform: {
        "& form": {
            display: "flex",
            flexDirection: "column",
        },
    },
    cardGrid: {
        margin: "auto",
        "& button": {
            "& svg": {
                fontSize: 50,
            },
        },
    },
    [theme.breakpoints.down("sm")]: {
        gridImage: {
            display: "none",
        },
    },
}));
