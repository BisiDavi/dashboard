import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { Paper } from "@material-ui/core";
import Input from "@components/formElements/Input";
import formFields from "@json/inventoryForm.json";
import { modalFormSchema } from "./schemas";
import { inventoryStyles } from "@styles/Inventory.style";
import { InventoryAction } from "@store/actions/inventoryAction";

export default function InventoryForm() {
    const classes = inventoryStyles();
    const dispatch = useDispatch();
    return (
        <Formik
            initialValues={{
                name: "",
                price: "",
                description: "",
                quantity: "",
            }}
            validationSchema={modalFormSchema}
            onSubmit={(values) => {
                console.log("values", values);
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
                        {formFields.map((content) => (
                            <Input
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                values={values}
                                errors={errors}
                                touched={touched}
                                key={content.name}
                                input={content}
                            />
                        ))}
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
