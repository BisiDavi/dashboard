import {
    createStyles,
    lighten,
    makeStyles,
    Theme,
} from "@material-ui/core/styles";

export const useToolbarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1),
        },
        highlight:
            theme.palette.type === "light"
                ? {
                      color: theme.palette.secondary.main,
                      backgroundColor: lighten(
                          theme.palette.secondary.light,
                          0.85,
                      ),
                  }
                : {
                      color: theme.palette.text.primary,
                      backgroundColor: theme.palette.secondary.dark,
                  },
        title: {
            flex: "1 1 100%",
        },
        [theme.breakpoints.down("xs")]: {
            title: {
                fontSize: 15,
            },
        },
    }),
);

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
        },
        paper: {
            width: "100%",
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
        table: {
            minWidth: 750,
        },
        visuallyHidden: {
            border: 0,
            clip: "rect(0 0 0 0)",
            height: 1,
            margin: -1,
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            top: 20,
            width: 1,
        },
        [theme.breakpoints.down("xs")]: {
            title: {
                fontSize: 12,
            },
        },
    }),
);
