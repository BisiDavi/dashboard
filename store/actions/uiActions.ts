import { TOGGLE_MENU } from "@store/constants";
import { UIType } from "../../types/";

export const UIActions =
    () => (dispatch: (arg0: { type: UIType }) => boolean) => {
        return dispatch({
            type: TOGGLE_MENU,
        });
    };
