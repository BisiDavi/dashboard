import * as yup from "yup";

const authSchema = yup.object().shape({
    username: yup
        .string()
        .equals(["guest"], "username must be guest")
        .required("Username is required"),
    password: yup
        .string()
        .equals(["guest"], "password must be guest")
        .required("Password is required"),
});

export default authSchema;
