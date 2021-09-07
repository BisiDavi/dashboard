import { useState, PropsWithChildren } from "react";
import { useTheme, Grid, Paper } from "@material-ui/core";
import { pagelayoutStyle } from "@styles/Pagelayout.style";
import Logo from "@components/Logo";
import Sidebar from "@components/Sidebar";

export default function Pagelayout({ children }: PropsWithChildren<{}>) {
  const classes = pagelayoutStyle();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Paper>
          <Logo />
        </Paper>
      </Grid>
      <Grid className={classes.content} item xs={12}>
        <Grid item lg={1}>
          <Sidebar />
        </Grid>
        <Grid item lg={11}>
          <main className={classes.main}>{children}</main>
        </Grid>
      </Grid>
    </Grid>
  );
}
