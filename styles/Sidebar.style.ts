import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const sidebarStyle = makeStyles((theme: Theme) =>
    createStyles({
        sidebar: {
            height: "100vh",
            padding: theme.spacing(2),
        },
        list: {
            width: "100%",
        },
        category: {
            margin: 10,
        },
    }),
);
