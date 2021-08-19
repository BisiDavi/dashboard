import Link from "next/link";
import AuthCard from "@components/AuthCard";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Divider, Checkbox, Typography } from "@material-ui/core";
import {registerformStyles} from '@styles/Authform.style'


export default function Registerform() {
  const recoveryContent = {
    title: "Register",
    text: "Create an account by registering your details.",
  };
  const classes = registerformStyles()
  return (
    <AuthCard content={recoveryContent}>
      <form>
        <TextField
          variant="outlined"
          type="email"
          className={classes.input}
          name="email"
          placeholder="Email Address"
        />
        <TextField
          variant="outlined"
          name="password"
          type="password"
          className={classes.input}
          placeholder="Password"
        />
        <Button>Register</Button>
        <div>
          <Checkbox />{" "}
          <Typography component="p">
            I have read the <a href="#">Terms and Conditions</a>
          </Typography>
        </div>
        <Divider />
        <Link href="/auth/login" passHref>
          <Typography component="a">Having an account, Login.</Typography>
        </Link>
      </form>
    </AuthCard>
  );
}
