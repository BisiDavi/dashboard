import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme, useMediaQuery } from "@material-ui/core";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import { RootState } from "@store/rootReducer";

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
    [prefersDarkMode]
  );

  return { appliedTheme };
}
