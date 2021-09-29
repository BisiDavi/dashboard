import { useState, ChangeEvent } from "react";
import { TextField, makeStyles } from "@material-ui/core";
import { FormikErrors, FormikTouched } from "formik";
import { formValues } from "../../types";

const useStyles = makeStyles((theme) => ({
    input: {
        margin: theme.spacing(2, 0),
        width: "100%",
    },
}));

type inputValueType = {
    email: string;
    password: string;
};

interface InputProps {
    input: {
        type: string;
        name: string;
        label: string;
        placeholder: string;
    };
    handleChange?: (e: string | ChangeEvent<any>) => void;
    handleBlur?: (e: string | ChangeEvent<any>) => void;
    values?: unknown;
    errors?: FormikErrors<unknown>;
    touched?: FormikTouched<inputValueType> | any;
    formValues?: { selectedField: formValues; selectedIndex: number };
}

export default function Input({
    input,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
}: InputProps) {
    const classes = useStyles();
    return (
            <TextField
                variant="outlined"
                type={input.type}
                data-testid="text-input"
                fullWidth
                name={input.name}
                placeholder={input.placeholder}
                value={values[input.name]}
                className={classes.input}
                label={input.label}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={
                    errors &&
                    errors[values[input.name]] &&
                    touched[values[input.name]]
                }
            />
    );
}
