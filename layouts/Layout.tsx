import { PropsWithChildren } from "react";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import useTheme from "@hooks/useTheme";

export default function Layout({ children }: PropsWithChildren<{}>) {
  const { appliedTheme } = useTheme();

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
