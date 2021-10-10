import { Formik } from "formik";
import {
    IconButton,
    Paper,
    Tooltip,
    Button,
    Typography,
    TextField,
} from "@material-ui/core";
import { useEffect } from "react";
import { signIn, useSession } from "next-auth/client";
import { useRouter } from "next/router";

import AuthCard from "@components/AuthCard";
import Input from "@components/formElements/Input";
import { authFormStyles } from "@styles/Authform.style";
import authJson from "@json/auth.json";
import authSchema from "@components/form/authSchema";
import displayIcons from "@utils/displayIcons";

type providerType = {
    name: string;
    id: string;
};

interface SigninformProps {
    providers: any;
    csrfToken: string;
}

export default function Signinform({ providers, csrfToken }: SigninformProps) {
    const classes = authFormStyles();
    const router = useRouter();
    const [session] = useSession();

    console.log("session", session);

    useEffect(() => {
        if (session) {
            router.push("/");
        }
    }, [session, router]);

    return (
        <>
            <AuthCard content={authJson.login}>
                <div className={classes.iconGroup}>
                    {Object.values(providers).map((provider: providerType) => (
                        <Tooltip key={provider.id} title={provider.name}>
                            <IconButton onClick={() => signIn(provider.id)}>
                                {displayIcons(provider.id)}
                            </IconButton>
                        </Tooltip>
                    ))}
                </div>
                <Paper elevation={2} className={classes.alternative}>
                    <Typography component="h5">Username: guest</Typography>
                    <Typography component="h3">OR</Typography>
                    <Typography component="h5">Password: guest</Typography>
                </Paper>
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                    }}
                    validationSchema={authSchema}
                    onSubmit={(values) => {
                        signIn("credentials", {
                            username: values.username,
                            password: values.password,
                        });
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
                            <>
                                <TextField
                                    name="csrfToken"
                                    type="hidden"
                                    defaultValue={csrfToken}
                                />
                                {authJson.fields.map((field, index) => (
                                    <Input
                                        input={field}
                                        key={index}
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        values={values}
                                        errors={errors}
                                        touched={touched}
                                    />
                                ))}
                            </>
                            <Button
                                disabled={!isValid}
                                type="submit"
                                variant="contained"
                            >
                                Register
                            </Button>
                        </form>
                    )}
                </Formik>
            </AuthCard>
        </>
    );
}
