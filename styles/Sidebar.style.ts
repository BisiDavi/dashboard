import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const sidebarStyle = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.up("lg")]: {
            sidebarWidth: {
                width: "16%",
            },
        },
        [theme.breakpoints.only("md")]: {
            sidebarWidth: {
                width: "24%",
            },
        },
        [theme.breakpoints.down("sm")]: {
            sidebar: {
                height: "100vh",
                padding: theme.spacing(2),
                position: "absolute",
                left: 0,
                zIndex: 10,
                width: "100%",
            },
        },
        activeLink: {
            backgroundColor: "rgb(146 164 173 / 25%)",
            borderRight: "7px solid #303f9f",
            margin: "10px 0",
        },
        sidebar: {
            height: "100vh",
            padding: theme.spacing(2),
            position: "fixed",
        },
        list: {
            width: "100%",
        },
        category: {
            margin: 10,
        },
    }),
);
