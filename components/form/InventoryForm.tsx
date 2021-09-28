import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { Paper } from "@material-ui/core";
import formFields from "@json/inventoryForm.json";
import { modalFormSchema } from "./schemas";
import { inventoryStyles } from "@styles/Inventory.style";
import {
    addProductInventoryAction,
    editProductInventoryAction,
} from "@store/actions/inventoryAction";
import displayFormElements from "@components/formElements/displayFormElements";
import { formValues } from "../../types";

interface InventoryFormProps {
    formValues?: { selectedField: formValues; selectedIndex: number };
    formType?: "edit" | "add";
}

export default function InventoryForm({
    formValues,
    formType,
}: InventoryFormProps) {
    const classes = inventoryStyles();
    const dispatch = useDispatch();
    const initialValues = {
        name: "",
        price: "",
        description: "",
        category: "",
        quantity: "",
    };
    const formInitialValues = formValues
        ? formValues.selectedField
        : initialValues;
    return (
        <Formik
            initialValues={formInitialValues}
            validationSchema={modalFormSchema}
            onSubmit={(values) => {
                const editValues = {
                    product: values,
                    index: formValues.selectedIndex,
                };
                formType === "edit"
                    ? dispatch(editProductInventoryAction(editValues))
                    : dispatch(addProductInventoryAction(values));
            }}
        >
            {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
                isValid,
            }) => (
                <Paper className={classes.form}>
                    <form onSubmit={handleSubmit}>
                        {displayFormElements(
                            formFields,
                            handleChange,
                            handleBlur,
                            values,
                            errors,
                            touched,
                            formValues,
                        )}
                        <Button
                            disabled={!isValid}
                            type="submit"
                            className={classes.button}
                            variant="contained"
                        >
                            Submit
                        </Button>
                    </form>
                </Paper>
            )}
        </Formik>
    );
}
