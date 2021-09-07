import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const sidebarStyle = makeStyles((theme: Theme) =>
  createStyles({
    sidebar: {
      height: "100vh",
    },
    list: {
      width: "100%",
    },
  })
);
