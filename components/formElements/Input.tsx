import { useState } from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    input: {
        margin: theme.spacing(2, 0),
        width: "100%",
    },
}));
export default function Input({ input }) {
    const [showPassword, setShowPassword] = useState(false);

    function displayPassword() {
        setShowPassword(!showPassword);
    }
		const isPasswordInput = input.type === "password"
    const classes = useStyles();
    return (
        <TextField
            variant="outlined"
            type={input.type}
            fullWidth
            name={input.name}
            className={classes.input}
            label={input.label}
        />
    );
}
