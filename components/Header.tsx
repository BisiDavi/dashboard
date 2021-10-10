/* eslint-disable @next/next/no-img-element */
import {
    Grid,
    AppBar,
    Button,
    Toolbar,
    IconButton,
    Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSession, signOut } from "next-auth/client";

import Logo from "@components/Logo";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { headerStyles } from "@styles/Header.style";
import { UIActions } from "@store/actions/uiActions";
import displayIcons from "@utils/displayIcons";

export default function Header() {
    const dispatch = useDispatch();
    const [session] = useSession();

    const classes = headerStyles();

    function toggleMenu() {
        dispatch(UIActions());
    }

    function logoutHandler() {
        return signOut({
            redirect: true,
            callbackUrl: `${process.env.NEXTAUTH_URL}/auth/signin`,
        });
    }
    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar>
                <Grid container className={classes.gridContainer}>
                    <Grid className={classes.logo} item lg={2}>
                        <Logo />
                    </Grid>
                    <Grid item lg={3} className={classes.gridItem}>
                        <div className={classes.menuGroup}>
                            {session?.user?.image && (
                                <img
                                    src={session?.user?.image}
                                    alt={session?.user?.name}
                                    height="60px"
                                    width="60px"
                                />
                            )}
                            {session && (
                                <Typography className={classes.email}>
                                    Welcome{"  "}
                                    {session?.user.email
                                        ? session?.user.email
                                        : session?.user.name}
                                </Typography>
                            )}
                            <Button
                                onClick={logoutHandler}
                                className={classes.logout}
                            >
                                {displayIcons("logout")} Logout
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
