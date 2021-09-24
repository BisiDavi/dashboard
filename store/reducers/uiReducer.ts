import { UIStateType, UIActionType } from "../../types/";
import { TOGGLE_SIDEBAR_MENU } from "../constants";

export default function UIReducer(
    state: UIStateType = {
        sidebarMenu: true,
    },
    actions: UIActionType,
) {
    const { type } = actions;
    switch (type) {
        case TOGGLE_SIDEBAR_MENU: {
            return {
                ...state,
                sidebarMenu: !state.sidebarMenu,
            };
        }
        default:
            return state;
    }
}
