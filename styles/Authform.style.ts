import { makeStyles } from "@material-ui/core";
import { colors } from "@styles/colors.styles";

export const authFormStyles = makeStyles((theme) => ({
    input: {
        margin: theme.spacing(2, 0),
        width: "100%",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        width: "100%",

        "& button": {
            //   backgroundColor: colors.blue,
            backgroundColor: theme.palette.primary.main,
            color: "white",
            margin: theme.spacing(2, 0),
            padding: theme.spacing(1, 0),
        },

        "& button:hover": {
            backgroundColor: colors.darkBlue,
        },

        "& a": {
            margin: theme.spacing(1, 0),
        },
        "& a:hover": {
            color: colors.red,
        },
    },
    alert: {
        margin: theme.spacing(2, 0),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    conditions: {
        display: "flex",
        alignItems: "center",
    },
    iconGroup: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "10px auto",
    },
}));
