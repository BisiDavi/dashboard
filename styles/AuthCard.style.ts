import { makeStyles } from "@material-ui/core";

export const authCardStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(0, 3),
    width: "100%",
  },
  header: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Nunito",
    justifyContent: "space-between",
    "& div": {
      flexDirection: "column",
      "& h1": {
        fontSize: theme.spacing(5),
        lineHeight: theme.spacing(1) * 0.25,
        fontWeight: "bold",
      },
      "& p": {
        fontSize: theme.spacing(2),
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
