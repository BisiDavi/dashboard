import { Grid, AppBar, Button, Toolbar, IconButton } from "@material-ui/core";
import Logo from "@components/Logo";
import { headerStyles } from "@styles/Header.style";

export default function Header() {
  const classes = headerStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container className={classes.gridContainer}>
          <Grid item lg={2}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Logo />
            </IconButton>
          </Grid>
          <Grid item lg={2} className={classes.gridItem}>
            <Button color="inherit">News</Button>
            <Button color="inherit">Login</Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
