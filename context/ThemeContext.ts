import { createContext } from "react";

const defaultThemeState = {
  dark: false,
};

export const ThemeContext = createContext(defaultThemeState);
