import Link from "next/link";
import { useState } from "react";
import {
  makeStyles,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import menus from "@json/menu.json";
import menuIcons from "./MenuIcons";

const useStyles = makeStyles({
  list: {
    width: "100%",
  },
});

export default function Sidebar() {
  const classes = useStyles();
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

  const list = () => (
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
  );

  return (
    <SwipeableDrawer
      anchor="left"
      open={true}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      {list()}
    </SwipeableDrawer>
  );
}
