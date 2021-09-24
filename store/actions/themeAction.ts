import { TOGGLE_THEME } from "../constants";

export const toggleThemeAction = () => (dispatch) => {
  dispatch({
    type: TOGGLE_THEME,
  });
};
