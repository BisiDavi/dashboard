import Link from "next/link";
import AuthCard from "@components/AuthCard";
import Button from "@material-ui/core/Button";
import { Divider, Checkbox, Typography } from "@material-ui/core";
import Input from "@components/formElements/Input";
import { authFormStyles } from "@styles/Authform.style";
import authJson from "@json/auth.json";

export default function Registerform() {
    const recoveryContent = {
        title: "Register",
        text: "Create an account by registering your details.",
    };
    const classes = authFormStyles();

    return (
        <AuthCard content={recoveryContent}>
            <form className={classes.form}>
                {authJson.map((content) => (
                    <Input key={content.name} input={content} />
                ))}
                <Button variant="contained">Register</Button>

                <div className={classes.conditions}>
                    <Checkbox />{" "}
                    <Typography component="p">
                        I have read the <a href="#">Terms and Conditions</a>
                    </Typography>
                </div>
                <Divider className={classes.divider} />
                <Link href="/auth/login" passHref>
                    <Typography component="a">
                        Having an account, Login.
                    </Typography>
                </Link>
            </form>
        </AuthCard>
    );
}
