import Logo from "@components/Logo";
import { Container } from "@material-ui/core";
import { PropsWithChildren } from "react";

export default function Authlayout({ children }: PropsWithChildren<{}>) {
  return (
    <Container maxWidth="xl">
      <Logo />
      {children}
    </Container>
  );
}
