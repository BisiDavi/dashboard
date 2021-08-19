import { makeStyles } from "@material-ui/core";
import { colors } from "@styles/colors.styles";

export const authFormStyles = makeStyles((theme) => ({
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
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
  },
}));

export const registerformStyles = makeStyles((theme) => ({
  input: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export const loginFormStyles = makeStyles({});
