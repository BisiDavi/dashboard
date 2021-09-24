import { combineReducers } from "redux";
import inventoryReducer from "./inventoryReducer";
import themeReducer from "./themeReducer";
import UIReducer from "./uiReducer";

const rootReducer = combineReducers({
    theme: themeReducer,
    ui: UIReducer,
    inventory: inventoryReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
