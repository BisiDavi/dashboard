import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const pagelayoutStyle = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexDirection: "column",
        },
        appBarContainer: {
            zIndex: 1000,
            width: "100%",
            left: "0",
            position: "fixed",
            top: "0px",
        },
        content: {
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            position: "relative",
            top: "70px",
        },
        sidebarContainer: {
            height: "100vh",
            width: "100%",
        },
        mainContainer: {
            padding: "20px",
            width: "100%",
        },
        appbar: {
            backgroundColor: theme.palette.primary.light,
        },
        drawer: {
            height: "100%",
            position: "unset",
        },
    }),
);
