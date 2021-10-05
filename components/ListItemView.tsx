import { useEffect, useState } from "react";
import Link from "next/link";
import useRedux from "@hooks/useRedux";
import {
    ListItem,
    ListItemText,
    ListItemIcon,
    useMediaQuery,
} from "@material-ui/core";
import { useRouter } from "next/router";

import displayIcons from "@utils/displayIcons";
import { UIActions } from "@store/actions/uiActions";
import { sidebarStyle } from "@styles/Sidebar.style";

export default function ListItemView({ item }) {
    const [active, setActive] = useState(false);
    const { dispatch } = useRedux();
    const router = useRouter();
    const matches = useMediaQuery("(max-width:768px)");
    const classes = sidebarStyle();

    const activeStyle = active && classes.activeLink;

    console.log("router", router, "item", item);

    useEffect(() => {
        if (router.route.includes(item)) {
            setActive(true);
        }
    }, [item, router.route]);

    function toggleMenu() {
        matches && dispatch(UIActions());
    }
    return (
        <Link href={item.link} passHref>
            <ListItem onClick={toggleMenu} button className={activeStyle}>
                <ListItemIcon>{displayIcons(item.icon)}</ListItemIcon>
                <ListItemText primary={item.name} />
            </ListItem>
        </Link>
    );
}
