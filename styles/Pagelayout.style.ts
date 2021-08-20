import { makeStyles, createStyles, Theme } from "@material-ui/core";

const drawerWidth = 240;

export const pagelayoutStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
    content: {
      display: "flex",
      alignItems: "center",
    },
    main: {
      width: "100%",
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
