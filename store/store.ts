import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "@utils/storage";
import RootReducer from "./reducers/rootReducer";

const middleware = [thunk];

const persistConfig = {
    key: "dashboard",
    storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const store = createStore(
    persistedReducer,
    process.env.NEXT_PUBLIC_ENVIRONMENT === "dev"
        ? composeWithDevTools(applyMiddleware(...middleware))
        : applyMiddleware(...middleware),
);

export const persistor = persistStore(store);

export default store;
