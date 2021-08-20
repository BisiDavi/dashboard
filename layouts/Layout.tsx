import { PropsWithChildren } from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import useTheme from "@hooks/useTheme";
import ToggleTheme from "@components/ToggleTheme";
import { layoutStyle } from "@styles/Layout.syle";

export default function Layout({ children }: PropsWithChildren<{}>) {
  const { appliedTheme } = useTheme();
  const classes = layoutStyle();
  
  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      {children}
      <div className={classes.toggleTheme}>
        <ToggleTheme />
      </div>
    </ThemeProvider>
  );
}
