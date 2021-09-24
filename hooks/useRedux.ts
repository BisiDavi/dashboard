import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@store/reducers/rootReducer";

type stateNameType = "theme" | "ui" | "inventory";

export default function useRedux(stateName?: stateNameType) {
    const dispatch = useDispatch();

    const stateFromRedux = useSelector((state: RootState) => state[stateName]);

    return {
        dispatch,
        stateFromRedux,
    };
}
