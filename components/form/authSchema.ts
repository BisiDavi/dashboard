import * as yup from "yup";

const authSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Email address is required"),
    password: yup.string().min(8).required("Password is required"),
});

export default authSchema;
