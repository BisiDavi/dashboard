import Link from "next/link";
import { Formik } from "formik";
import AuthCard from "@components/AuthCard";
import Button from "@material-ui/core/Button";
import { Divider, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Input from "@components/formElements/Input";
import { authFormStyles } from "@styles/Authform.style";
import authJson from "@json/auth.json";
import authSchema from "@components/form/authSchema";

export default function Loginform() {
    const classes = authFormStyles();

    return (
        <AuthCard content={authJson.login}>
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
                            Log In
                        </Button>
                        <Alert className={classes.alert} severity="info">
                            You can use <b>admin@dashboard</b> and{" "}
                            <b>Password123!</b>
                        </Alert>
                        <Divider className={classes.divider} />
                        {authJson.login.links.map((item, index) => (
                            <Link href={item.link} key={index} passHref>
                                <Typography component="a">
                                    {item.name}
                                </Typography>
                            </Link>
                        ))}
                    </form>
                )}
            </Formik>
        </AuthCard>
    );
}
