import { useState } from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    input: {
        margin: theme.spacing(2, 0),
        width: "100%",
    },
}));

interface InputProps {
    input: {
        type: string;
        name: string;
        label: string;
        placeholder: string;
    };
}

export default function Input({ input }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);

    function displayPassword() {
        setShowPassword(!showPassword);
    }
    const isPasswordInput = input.type === "password";
    const classes = useStyles();
    return (
        <TextField
            variant="outlined"
            type={input.type}
            fullWidth
            name={input.name}
            placeholder={input.placeholder}
            className={classes.input}
            label={input.label}
        />
    );
}
