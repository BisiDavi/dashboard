import {
    Grid,
    AppBar,
    Button,
    Toolbar,
    IconButton,
    Tooltip,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Logo from "@components/Logo";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { headerStyles } from "@styles/Header.style";
import { UIActions } from "@store/actions/uiActions";

export default function Header() {
    const dispatch = useDispatch();

    const classes = headerStyles();
    const router = useRouter();

    function toggleMenu() {
        dispatch(UIActions());
    }

    function logoutHandler() {
        return router.push("/auth").then((response) => {
            console.log("response", response);
        });
    }
    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <Grid container className={classes.gridContainer}>
                    <Grid item lg={2}>
                        <Tooltip title="Office dashboard">
                            <Logo />
                        </Tooltip>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                        <div className={classes.menuGroup}>
                            <Button onClick={logoutHandler} color="inherit">
                                Logout
                            </Button>
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
