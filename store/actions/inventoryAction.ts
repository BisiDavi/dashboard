import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "@store/constants";

type productType = {
    name: string;
    price: string;
    description: string;
    category: string;
    quantity: string;
};

type editProductType = {
    product: productType;
    index: number;
};

type deleteProductType = {
    index: number;
};

export const addProductInventoryAction =
    (payload: productType) =>
    (
        dispatch: (arg0: { type: "ADD_PRODUCT"; payload: productType }) => any,
    ) => {
        return dispatch({
            type: ADD_PRODUCT,
            payload,
        });
    };

export const editProductInventoryAction =
    (payload: editProductType) =>
    (
        dispatch: (arg0: {
            type: "EDIT_PRODUCT";
            payload: editProductType;
        }) => any,
    ) => {
        return dispatch({
            type: EDIT_PRODUCT,
            payload,
        });
    };

export const deleteProductInventoryAction =
    (payload: deleteProductType) =>
    (
        dispatch: (arg0: {
            type: "DELETE_PRODUCT";
            payload: deleteProductType;
        }) => any,
    ) => {
        return dispatch({
            type: DELETE_PRODUCT,
            payload,
        });
    };
