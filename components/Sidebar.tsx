import clsx from "clsx";
import { useSession, signOut } from "next-auth/client";
import { List, Typography, IconButton, Paper } from "@material-ui/core";

import menus from "@json/menu.json";
import ListItemView from "./ListItemView";
import { sidebarStyle } from "@styles/Sidebar.style";
import displayIcons from "@utils/displayIcons";

export default function Sidebar() {
    const classes = sidebarStyle();
    const [session] = useSession();

    const userData = {
        name: session?.user?.name,
        icon: "avatar",
        link: "/",
    };

    function logoutHandler() {
        return signOut({
            redirect: true,
            callbackUrl: `${process.env.NEXTAUTH_URL}/auth/signin`,
        });
    }
    return (
        <Paper className={clsx(classes.sidebar, classes.sidebarWidth)}>
            <div className={classes.list}>
                {session && <ListItemView item={userData} />}
                <List>
                    {menus.map(({ category, menu }) => (
                        <div key={category}>
                            <Typography
                                className={classes.category}
                                component="h3"
                            >
                                {category}
                            </Typography>
                            {menu.map((item, index) => (
                                <ListItemView
                                    key={`${item}-${index}`}
                                    item={item}
                                />
                            ))}
                        </div>
                    ))}
                </List>
                <IconButton onClick={logoutHandler} className={classes.logout}>
                    {displayIcons("logout")}
                    {"  "} Logout
                </IconButton>
            </div>
        </Paper>
    );
}
