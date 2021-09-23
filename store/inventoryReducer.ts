import { ADD_PRODUCT } from "./constants";
import { InventoryState } from "../types/.";

export default function InventoryReducer(
    state: InventoryState = {
        product: {
            name: "",
            image: "",
            price: "",
            quantity: "",
            description: "",
        },
    },
    actions,
) {
    const { type, payload } = actions;
    switch (type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                product: payload,
            };
        }
        default:
            return state;
    }
}
