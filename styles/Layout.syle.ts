import { makeStyles } from "@material-ui/core";

export const layoutStyle = makeStyles((theme) => ({
  toggleTheme: {
    position: "absolute",
    bottom: theme.spacing(6),
    right: theme.spacing(4),
    "& button": {
      backgroundColor: theme.palette.primary.light,
      color: "white",
    },
  },
}));
