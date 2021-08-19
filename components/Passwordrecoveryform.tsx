import { TextField, Button } from "@material-ui/core";
import AuthCard from "@components/AuthCard";
import { authFormStyles } from "@styles/Authform.style";

export default function Passwordrecoveryform() {
  const recoveryContent = {
    title: "Password Recovery",
    text: "Tell us your email so we can send you a reset link",
  };

  const classes = authFormStyles();

  return (
    <AuthCard content={recoveryContent}>
      <form className={classes.form}>
        <TextField
          name="email"
          label="Email Address"
          variant="outlined"
          className={classes.input}
          placeholder="Email Address"
        />
        <Button variant="contained">Recover Password</Button>
      </form>
    </AuthCard>
  );
}
