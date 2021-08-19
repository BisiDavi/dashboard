import Link from "next/link";
import AuthCard from "@components/AuthCard";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Divider, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { loginFormStyles } from "@styles/Loginform.style";

export default function Loginform() {
  const recoveryContent = {
    title: "Log in",
    text: "Welcome, Log in to access the dashboard",
  };
  const links = [
    { name: "Create new Account", link: "/auth/register" },
    { name: "Forgot password", link: "/auth/password-recovery" },
  ];
  const classes = loginFormStyles()
  
  return (
    <AuthCard content={recoveryContent}>
      <form>
        <TextField
          variant="outlined"
          type="email"
          name="email"
          label="Email Address"
          placeholder="Email Address"
        />
        <TextField
          variant="outlined"
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
        />
        <Button variant="contained">Log In</Button>
        <Alert severity="info">
          You can use admin@dashboard and Password123!
        </Alert>
        <Divider />
        {links.map((item, index) => (
          <Link href={item.link} key={index} passHref>
            <Typography component="a">{item.name}</Typography>
          </Link>
        ))}
      </form>
    </AuthCard>
  );
}
