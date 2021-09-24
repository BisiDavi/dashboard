import { TOGGLE_THEME } from "../constants";

export default function themeReducer(
    state = {
        theme: "light",
        toggleTheme: false,
    },
    action,
) {
    const { type } = action;
    switch (type) {
        case TOGGLE_THEME:
            const themeToggled = !state.toggleTheme;
            const themeState = themeToggled ? "dark" : "light";
            return { ...state, theme: themeState, toggleTheme: themeToggled };

        default:
            return state;
    }
}
