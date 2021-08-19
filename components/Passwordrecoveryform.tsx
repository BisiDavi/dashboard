import { TextField, Button } from "@material-ui/core";
import AuthCard from "./AuthCard";

export default function Passwordrecoveryform() {
  const recoveryContent = {
    title: "Password Recovery",
    text: "Tell us your email so we can send you a reset link",
  };
  return (
    <AuthCard content={recoveryContent}>
      <TextField
        name="email"
        label="Email Address"
        variant="outlined"
        placeholder="Email Address"
      />
      <Button variant="contained">Recover Password</Button>
    </AuthCard>
  );
}
