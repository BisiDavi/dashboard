import { PropsWithChildren, useState } from "react";

export default function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const [dark, setDark] = useState(false);
}
