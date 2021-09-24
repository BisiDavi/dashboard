import { UIStateType, UIActionType } from "../../types/";
import { TOGGLE_MENU } from "../constants";

export default function UIReducer(
    state: UIStateType = {
        toggleMenu: false,
    },
    actions: UIActionType,
) {
    const { type } = actions;
    switch (type) {
        case TOGGLE_MENU: {
            return {
                ...state,
                showMenu: !state.toggleMenu,
            };
        }
        default:
            return state;
    }
}
