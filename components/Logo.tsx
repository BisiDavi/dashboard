/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@styles/colors.styles";

const useStyles = makeStyles((theme) => ({
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
        },
        "& h1": {
            fontSize: "20px",
        },
        [theme.breakpoints.down("xs")]: {
            "& h1": {
                fontSize: 18,
            },
        },
    },
}));
export default function Logo() {
    const classes = useStyles();
    return (
        <Link href="/" passHref>
            <a>
                <div className={classes.logo}>
                    <div className="triangle"></div>
                    <h1>Office Dashboard</h1>
                </div>
            </a>
        </Link>
    );
}
