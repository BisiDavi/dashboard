import { makeStyles } from "@material-ui/core";

export const AuthStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    backgroundColor: "rgb(244, 245, 247)",
    display: "flex",
    margin: "auto",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  "& h1": {
    textAlign: "center",
  },
  content: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  authGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));
