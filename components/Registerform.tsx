import AuthCard from "@components/AuthCard";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Divider, Checkbox, Typography, makeStyles } from "@material-ui/core";

export default function Registerform() {
  const recoveryContent = {
    title: "Register",
    text: "Create an account by registering your details.",
  };
  return (
    <AuthCard content={recoveryContent}>
      <form>
        <TextField
          variant="outlined"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <TextField
          variant="outlined"
          name="password"
          type="password"
          placeholder="Password"
        />

        <Button>Register</Button>
        <div>
          <Checkbox  />{" "}
          <Typography component="p">
            I have read the <a href="#">Terms and Conditions</a>
          </Typography>
        </div>
        <Divider />
        <Typography>Having an account, Login.</Typography>
      </form>
    </AuthCard>
  );
}
