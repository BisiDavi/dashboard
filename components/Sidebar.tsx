import clsx from "clsx";
import Link from "next/link";
import { useSession } from "next-auth/react";
import useRedux from "@hooks/useRedux";
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Typography,
    Paper,
    useMediaQuery,
} from "@material-ui/core";
import menus from "@json/menu.json";
import displayIcons from "@utils/displayIcons";
import { UIActions } from "@store/actions/uiActions";
import { sidebarStyle } from "@styles/Sidebar.style";

export default function Sidebar() {
    const classes = sidebarStyle();
    const { dispatch } = useRedux();
    const { data } = useSession();
    const matches = useMediaQuery("(max-width:768px)");

    function toggleMenu() {
        matches && dispatch(UIActions());
    }

    return (
        <Paper className={clsx(classes.sidebar, classes.sidebarWidth)}>
            <div className={classes.list}>
                {data && (
                    <List>
                        <ListItem>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText primary={data.user.name} />
                        </ListItem>
                    </List>
                )}
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
                                    <ListItem onClick={toggleMenu} button>
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
