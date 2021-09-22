import { makeStyles } from "@material-ui/core";

export const layoutStyle = makeStyles((theme) => ({
    toggleTheme: {
        position: "fixed",
        bottom: theme.spacing(6),
        right: theme.spacing(4),
        "& button": {
            backgroundColor: theme.palette.primary.dark,
            color: "white",
        },
    },
}));
