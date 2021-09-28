import { Grid, AppBar, Button, Toolbar, IconButton } from "@material-ui/core";
import Logo from "@components/Logo";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import useRedux from "@hooks/useRedux";
import { headerStyles } from "@styles/Header.style";
import { UIActions } from "@store/actions/uiActions";

export default function Header() {
    const { dispatch } = useRedux();
    const classes = headerStyles();

    function toggleMenu() {
        dispatch(UIActions());
    }
    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <Grid container className={classes.gridContainer}>
                    <Grid item lg={2}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <Logo />
                        </IconButton>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                        <div className={classes.menuGroup}>
                            {/*<Button color="inherit">News</Button>*/}
                            <Button color="inherit">Logout</Button>
                        </div>
                        <IconButton
                            className={classes.menu}
                            onClick={toggleMenu}
                            color="inherit"
                        >
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
