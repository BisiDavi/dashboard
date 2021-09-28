import { ChangeEvent } from "react";
import { TextField, makeStyles, Select } from "@material-ui/core";
import { FormikErrors, FormikTouched } from "formik";

const useStyles = makeStyles((theme) => ({
    field: {
        margin: theme.spacing(2, 0),
        width: "100%",
    },
}));

interface fieldProps {
    field: {
        type: string;
        name: string;
        label: string;
        placeholder: string;
        option?: string;
    };
    handleChange?: (e: string | ChangeEvent<any>) => void;
    handleBlur?: (e: string | ChangeEvent<any>) => void;
    values?: unknown;
    errors?: FormikErrors<unknown>;
    touched?: FormikTouched<unknown>;
}

export default function SelectField({
    field,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
}: fieldProps) {
    const classes = useStyles();
    return (
        <>
            <Select
                variant="outlined"
                type="select"
                data-testid="select-field"
                fullWidth
                name={field.name}
                value={values[field.name]}
                placeholder={field.placeholder}
                className={classes.field}
                label={field.label}
                onChange={handleChange}
                onBlur={handleBlur}
            />
        </>
    );
}
