import Link from "next/link";
import { useState } from "react";
import {
  makeStyles,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Paper,
} from "@material-ui/core";
import menus from "@json/menu.json";
import menuIcons from "./MenuIcons";
import { sidebarStyle } from "@styles/Sidebar.style";

const useStyles = makeStyles({});

export default function Sidebar() {
  const classes = sidebarStyle();
  const [showDrawer, setShowDrawer] = useState(true);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setShowDrawer(!showDrawer);
  };

  return (
    <Paper className={classes.sidebar}>
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
        <List>
          {menus.map(({ category, menu }) => (
            <div key={category}>
              <Typography component="h3">{category}</Typography>
              {menu.map((item) => (
                <Link href={item.link} key={item} passHref>
                  <ListItem button>
                    <ListItemIcon>{menuIcons(item.icon)}</ListItemIcon>
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
