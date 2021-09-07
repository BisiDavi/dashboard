import React, { useState, PropsWithChildren } from "react";
import { useTheme, Grid } from "@material-ui/core";
import { pagelayoutStyle } from "@styles/Pagelayout.style";
import Sidebar from "@components/Sidebar";
import Header from "@components/Header";

export default function Pagelayout({ children }: PropsWithChildren<{}>) {
  const classes = pagelayoutStyle();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.appBarContainer}>
        <Header />
      </Grid>
      <Grid className={classes.content} item xs={12}>
        <Grid item lg={2} className={classes.sidebarContainer}>
          <Sidebar />
        </Grid>
        <Grid item lg={10} className={classes.mainContainer}>
          <main className={classes.main}>{children}</main>
        </Grid>
      </Grid>
    </Grid>
  );
}
