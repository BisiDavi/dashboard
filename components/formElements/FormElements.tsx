import { ChangeEvent } from "react";
import Input from "./Input";
import SelectField from "./SelectField";
import { FormikErrors, FormikTouched } from "formik";

interface FormElementsProps {
    fields: {
        type: string;
        name: string;
        label: string;
        placeholder: string;
        option?: string;
    }[];
    handleChange?: (e: string | ChangeEvent<any>) => void;
    handleBlur?: (e: string | ChangeEvent<any>) => void;
    values?: unknown;
    errors?: FormikErrors<unknown>;
    touched?: FormikTouched<unknown>;
}

export default function FormElements({
    fields,
    handleChange,
    handleBlur,
    errors,
    values,
    touched,
}: FormElementsProps) {
    return fields.map((field) => {
        switch (field.type) {
            case "input":
                return (
                    <Input
                        input={field}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        errors={errors}
                        touched={touched}
                    />
                );

            case "select":
                return (
                    <SelectField
                        field={field}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                        errors={errors}
                        touched={touched}
                    />
                );
            default:
                return null;
        }
    });
}
