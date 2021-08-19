import Head from "next/head";
import { PropsWithChildren } from "react";
import { Container, CssBaseline } from "@material-ui/core";
import Logo from "@components/Logo";
import { AuthStyles } from "@styles/Authlayout.style";

export default function Authlayout({
  children,
  title,
}: PropsWithChildren<AuthLayout>) {
  const classes = AuthStyles();
  return (
    <>
      <Head>
        <title>{title} | Awesome Dashboard</title>
      </Head>
      <CssBaseline />
      <Container className={classes.container}>
        <Logo />
        {children}
      </Container>
    </>
  );
}

interface AuthLayout {
  title: string;
}
