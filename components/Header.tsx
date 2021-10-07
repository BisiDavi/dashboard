/* eslint-disable @next/next/no-img-element */
import {
    Grid,
    AppBar,
    Button,
    Toolbar,
    IconButton,
    Tooltip,
    Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSession, signOut } from "next-auth/client";

import Logo from "@components/Logo";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { headerStyles } from "@styles/Header.style";
import { UIActions } from "@store/actions/uiActions";

export default function Header() {
    const dispatch = useDispatch();
    const [session] = useSession();

    const classes = headerStyles();

    function toggleMenu() {
        dispatch(UIActions());
    }

    console.log("data", session);

    function logoutHandler() {
        return signOut();
    }
    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <Grid container className={classes.gridContainer}>
                    <Grid className={classes.logo} item lg={3}>
                        <Tooltip title="Office dashboard">
                            <Logo />
                        </Tooltip>
                    </Grid>
                    <Grid item lg={2} className={classes.gridItem}>
                        <div className={classes.menuGroup}>
                            {session && (
                                <img
                                    src={session?.user.image}
                                    alt={session?.user.name}
                                    height="75px"
                                    width="75px"
                                />
                            )}
                            {session && (
                                <Typography className={classes.email}>
                                    {session?.user?.email}
                                </Typography>
                            )}
                            <Button
                                onClick={logoutHandler}
                                className={classes.logout}
                            >
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
