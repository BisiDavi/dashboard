import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "../constants";
import { InventoryState } from "../../types";

export default function inventoryReducer(
    state: InventoryState = {
        products: [],
    },
    actions,
) {
    const { type, payload } = actions;
    switch (type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                products: [...state.products, payload],
            };
        }
        case EDIT_PRODUCT: {
            const copyProducts = state.products;
            copyProducts[payload.index] = payload.product;
            return {
                ...state,
                products: copyProducts,
            };
        }
        case DELETE_PRODUCT: {
            const productsCopy = state.products;
            productsCopy.splice(0, payload);
            return {
                ...state,
                products: productsCopy,
            };
        }
        default:
            return state;
    }
}
