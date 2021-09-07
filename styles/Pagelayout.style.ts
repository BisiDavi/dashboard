import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const pagelayoutStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    appBarContainer: {
      position: "sticky",
      top: "0",
      zIndex: 1000,
      width: "100%",
      left: "0",
      height: "100px",
    },
    content: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    sidebarContainer: {
      height: "100vh",
      position: "fixed",
      width: "100%",
      left: "0",
      zIndex: 1,
    },
    main: {
      width: "100%",
    },
    mainContainer: {
      position: "absolute",
      right: "0",
      padding: "20px",
    },
    appbar: {
      backgroundColor: theme.palette.primary.light,
    },
    drawer: {
      height: "100%",
      position: "unset",
    },
  })
);
