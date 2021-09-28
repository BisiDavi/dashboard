import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "@store/constants";

type inventoryAction = {
    name: string;
    price: string;
    description: string;
    category: string;
    quantity: string;
};

export const addProductInventoryAction =
    (payload: inventoryAction) =>
    (
        dispatch: (arg0: {
            type: "ADD_PRODUCT";
            payload: inventoryAction;
        }) => any,
    ) => {
        return dispatch({
            type: ADD_PRODUCT,
            payload,
        });
    };

export const editProductInventoryAction =
    (payload: inventoryAction) =>
    (
        dispatch: (arg0: {
            type: "EDIT_PRODUCT";
            payload: inventoryAction;
        }) => any,
    ) => {
        return dispatch({
            type: EDIT_PRODUCT,
            payload,
        });
    };

export const deleteProductInventoryAction =
    (payload: inventoryAction) =>
    (
        dispatch: (arg0: {
            type: "DELETE_PRODUCT";
            payload: inventoryAction;
        }) => any,
    ) => {
        return dispatch({
            type: DELETE_PRODUCT,
            payload,
        });
    };
