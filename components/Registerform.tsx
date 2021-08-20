import Link from "next/link";
import { useDispatch } from "react-redux";
import AuthCard from "@components/AuthCard";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Divider, Checkbox, Typography } from "@material-ui/core";
import { authFormStyles } from "@styles/Authform.style";
import { toggleThemeAction } from "@store/themeAction";





export default function Registerform() {
  const dispatch = useDispatch();

  const recoveryContent = {
    title: "Register",
    text: "Create an account by registering your details.",
  };
  const classes = authFormStyles();

  function themeHandler() {
    dispatch(toggleThemeAction());
  }

  return (
    <AuthCard content={recoveryContent}>
      <form className={classes.form}>
        <TextField
          variant="outlined"
          type="email"
          className={classes.input}
          fullWidth
          name="email"
          label="Email Address"
        />
        <TextField
          variant="outlined"
          name="password"
          type="password"
          fullWidth
          label="password"
          className={classes.input}
        />

        <Button variant="contained">Register</Button>
        <Button onClick={themeHandler} variant="contained">
          light theme
        </Button>
        <div className={classes.conditions}>
          <Checkbox />{" "}
          <Typography component="p">
            I have read the <a href="#">Terms and Conditions</a>
          </Typography>
        </div>
        <Divider className={classes.divider} />
        <Link href="/auth/login" passHref>
          <Typography component="a">Having an account, Login.</Typography>
        </Link>
      </form>
    </AuthCard>
  );
}
