/* eslint-disable @next/next/no-img-element */
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@styles/colors.styles";

const useStyles = makeStyles({
  logo: {
    display: "flex",
    alignItems: "center",
    "& div": {
      color: "black",
      fontSize: "18px",
      fontWeight: "bold",
      display: "inline-block",
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "0 25px 43.3px 25px",
      borderColor: "transparent transparent #0d0d0d transparent",
      lineHeight: "0",
      _borderColor: "#000000 #000000 #0d0d0d #000000",
    },
    "& h1": {
      fontSize: "20px",
      color: colors.blue,
    },
  },
});
export default function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <div className="triangle"></div>
      <h1>Office Dashboard</h1>
    </div>
  );
}
