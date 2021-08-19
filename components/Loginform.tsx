import Link from "next/link";
import AuthCard from "@components/AuthCard";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Divider, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { authFormStyles } from "@styles/Authform.style";

export default function Loginform() {
  const recoveryContent = {
    title: "Log in",
    text: "Welcome, log in to access the dashboard",
  };
  const links = [
    { name: "Create new Account", link: "/auth/register" },
    { name: "Forgot password", link: "/auth/password-recovery" },
  ];

  const classes = authFormStyles();

  return (
    <AuthCard content={recoveryContent}>
      <form className={classes.form}>
        <TextField
          variant="outlined"
          type="email"
          fullWidth
          name="email"
          className={classes.input}
          label="Email Address"
        />
        <TextField
          variant="outlined"
          name="password"
          type="password"
          className={classes.input}
          label="Password"
        />
        <Button variant="contained">Log In</Button>
        <Alert className={classes.alert} severity="info">
          You can use <b>admin@dashboard</b> and <b>Password123!</b>
        </Alert>
        <Divider className={classes.divider} />
        {links.map((item, index) => (
          <Link href={item.link} key={index} passHref>
            <Typography component="a">{item.name}</Typography>
          </Link>
        ))}
      </form>
    </AuthCard>
  );
}
