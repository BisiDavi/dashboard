import { makeStyles } from "@material-ui/core";
import { colors } from "@styles/colors.styles";

export const AuthStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    display: "flex",
    margin: "auto",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
  },
  "& h1": {
    textAlign: "center",
  },
  content: {
    margin: theme.spacing(4, 0),
    width: "100%",
  },
  authGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  gridContainer: {
    justifyContent: "center",
  },
  toggleTheme: {
    position: "absolute",
    top: theme.spacing(8),
    right: theme.spacing(4),
    "& button": {
      backgroundColor: colors.blue,
      color: "white",
    },
  },
}));
