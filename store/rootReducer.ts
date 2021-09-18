import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
