import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { Paper } from "@material-ui/core";
import formFields from "@json/inventoryForm.json";
import { modalFormSchema } from "./schemas";
import { inventoryStyles } from "@styles/Inventory.style";
import { InventoryAction } from "@store/actions/inventoryAction";
import displayFormElements from "@components/formElements/displayFormElements";

export default function InventoryForm() {
    const classes = inventoryStyles();
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{
                name: "",
                price: "",
                description: "",
                category: "",
                quantity: "",
            }}
            validationSchema={modalFormSchema}
            onSubmit={(values) => {
                dispatch(InventoryAction(values));
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
