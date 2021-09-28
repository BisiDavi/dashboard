import { ADD_PRODUCT } from "@store/constants";

type inventoryAction = {
    name: string;
    price: string;
    description: string;
    quantity: string;
};

export const InventoryAction =
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
