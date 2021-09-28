import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import {
    makeStyles,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Paper,
} from "@material-ui/core";
import menus from "@json/menu.json";
import displayIcons from "@utils/displayIcons";
import { sidebarStyle } from "@styles/Sidebar.style";

export default function Sidebar() {
    const classes = sidebarStyle();
    const [showDrawer, setShowDrawer] = useState(true);

    return (
        <Paper className={clsx(classes.sidebar, classes.sidebarWidth)}>
            <div className={classes.list}>
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
                                <Link
                                    href={item.link}
                                    key={`${item}-${index}`}
                                    passHref
                                >
                                    <ListItem button>
                                        <ListItemIcon>
                                            {displayIcons(item.icon)}
                                        </ListItemIcon>
                                        <ListItemText primary={item.name} />
                                    </ListItem>
                                </Link>
                            ))}
                        </div>
                    ))}
                </List>
            </div>
        </Paper>
    );
}
