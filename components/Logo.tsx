import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  logo: {
    color: "white",
    fontSize: "18px",
  },
});
export default function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <h1>Admin</h1>
    </div>
  );
}
