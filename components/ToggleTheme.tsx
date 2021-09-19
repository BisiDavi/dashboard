import { useDispatch } from "react-redux";
import { Button, makeStyles } from "@material-ui/core";
import { BsSun, BsMoon } from "react-icons/bs";
import { toggleThemeAction } from "@store/themeAction";
import useTheme from "@hooks/useTheme";

const useStyles = makeStyles({
    button: {
        borderRadius: "50%",
        padding: 20,
    },
});
export default function ToggleTheme() {
    const dispatch = useDispatch();
    const { theme } = useTheme();

    const classes = useStyles();

    function themeHandler() {
        dispatch(toggleThemeAction());
    }

    return (
        <Button className={classes.button} onClick={themeHandler}>
            {theme === "light" ? (
                <BsSun fontSize={25} />
            ) : (
                <BsMoon fontSize={25} />
            )}
        </Button>
    );
}
