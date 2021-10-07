import clsx from "clsx";
import { useSession } from "next-auth/client";
import { List, Typography, Paper } from "@material-ui/core";

import menus from "@json/menu.json";
import ListItemView from "./ListItemView";
import { sidebarStyle } from "@styles/Sidebar.style";

export default function Sidebar() {
    const classes = sidebarStyle();
    const [session] = useSession();

    const userData = {
        name: session?.user?.name,
        icon: "avatar",
    };

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
            </div>
        </Paper>
    );
}
