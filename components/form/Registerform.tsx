import Link from "next/link";
import { Formik } from "formik";
import AuthCard from "@components/AuthCard";
import authSchema from "@components/form/authSchema";
import Button from "@material-ui/core/Button";
import { Divider, Checkbox, Typography } from "@material-ui/core";
import Input from "@components/formElements/Input";
import { authFormStyles } from "@styles/Authform.style";
import authJson from "@json/auth.json";

export default function Registerform() {
    const classes = authFormStyles();

    return (
        <AuthCard content={authJson.register}>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={authSchema}
                onSubmit={(values) => {
                    console.log("values", values);
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
                    <form onClick={handleSubmit} className={classes.form}>
                        {authJson.fields.map((content) => (
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
                            variant="contained"
                        >
                            Register
                        </Button>

                        <div className={classes.conditions}>
                            <Checkbox />{" "}
                            <Typography component="p">
                                I have read the{" "}
                                <a href="#">Terms and Conditions</a>
                            </Typography>
                        </div>
                        <Divider className={classes.divider} />
                        <Link href="/auth/login" passHref>
                            <Typography component="a">
                                Having an account, Login.
                            </Typography>
                        </Link>
                    </form>
                )}
            </Formik>
        </AuthCard>
    );
}
