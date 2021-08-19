import { makeStyles } from "@material-ui/core";
import { colors } from "@styles/colors.styles";

export const authFormStyles = makeStyles((theme) => ({
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: "100%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",

    "& button": {
      backgroundColor: colors.blue,
      color: "white",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      padding: theme.spacing(1),
    },

    "& button:hover": {
      backgroundColor: colors.darkBlue,
    },

    "& a": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    "& a:hover": {
      color: colors.red,
    },
  },
  alert: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginBottom: theme.spacing(2),
  },
  conditions: {
    display: "flex",
    alignItems: "center",
  },
}));
