import { makeStyles } from "@material-ui/core";

export const authCardStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(4),
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& div": {
      flexDirection: "column",
      "& h1": {
        color: "red",
      },
    },
  },
  authform: {
    "& form": {
      display: "flex",
      flexDirection: "column",
    },
  },
}));
