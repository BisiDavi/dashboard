import * as yup from "yup";

export const modalFormSchema = yup.object().shape({
    productName: yup.string().required("product name is  required"),
    productPrice: yup
        .number()
        .positive()
        .required("product price is  required"),
    productDescription: yup
        .string()
        .required("product description is  required"),
    productQuantity: yup.string().required("product quantity is  required"),
});
