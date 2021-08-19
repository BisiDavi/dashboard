import Head from "next/head";
import { PropsWithChildren } from "react";
import { Container, CssBaseline, makeStyles } from "@material-ui/core";
import Logo from "@components/Logo";
import {} from "@material-ui/core";

const useStyles = makeStyles({});

export default function Authlayout({
  children,
  title,
}: PropsWithChildren<AuthLayout>) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title}| Awesome Dashboard</title>
      </Head>
      <CssBaseline />
      <Container maxWidth="xl">
        <Logo />
        {children}
      </Container>
    </>
  );
}

interface AuthLayout {
  title: string;
}
