import { ChangeEvent } from "react";
import { FormikErrors, FormikTouched } from "formik";
import Input from "./Input";
import SelectField from "./SelectField";

type FormElementsProps = {
    fields: {
        field: string;
        name: string;
        type: string;
        label: string;
        placeholder: string;
        options?: string[];
    }[];
    handleChange?: (e: string | ChangeEvent<any>) => void;
    handleBlur?: (e: string | ChangeEvent<any>) => void;
    values?: unknown;
    errors?: FormikErrors<unknown>;
    touched?: FormikTouched<unknown>;
};

export default function displayFormElements(
    fields: FormElementsProps["fields"],
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
) {
    return fields.map((fieldItem) => {
        switch (fieldItem.field) {
            case "input":
                return (
                    <Input
                        input={fieldItem}
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
                        field={fieldItem}
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
