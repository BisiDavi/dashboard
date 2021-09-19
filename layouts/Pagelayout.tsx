import React, {  PropsWithChildren } from "react";
import {  Grid } from "@material-ui/core";
import { pagelayoutStyle } from "@styles/Pagelayout.style";
import Sidebar from "@components/Sidebar";
import Header from "@components/Header";

export default function Pagelayout({ children }: PropsWithChildren<{}>) {
  const classes = pagelayoutStyle();


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
