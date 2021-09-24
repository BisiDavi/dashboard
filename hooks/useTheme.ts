import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme, useMediaQuery } from "@material-ui/core";
import { RootState } from "@store/reducers/rootReducer";

export default function useTheme() {
    const { theme } = useSelector((state: RootState) => state.theme);

    const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${theme})`);

    const appliedTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    type: prefersDarkMode ? "light" : "dark",
                },
            }),
        [prefersDarkMode],
    );

    return { theme, appliedTheme };
}
