import * as yup from "yup";

export const modalFormSchema = yup.object().shape({
    name: yup.string().required("product name is  required"),
    price: yup.number().positive().required("product price is  required"),
    description: yup.string().required("product description is  required"),
    category: yup.string().required("product category is  required"),
    quantity: yup.string().required("product quantity is  required"),
});
