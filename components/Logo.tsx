import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  logo: {
    "& h1": {
      color: "black",
      fontSize: "18px",
      fontWeight: "bold",
    },
  },
});
export default function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <h1>Office Dashboard</h1>
    </div>
  );
}
