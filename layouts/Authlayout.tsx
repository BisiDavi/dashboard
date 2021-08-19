import Head from "next/head";
import { PropsWithChildren } from "react";
import { Container, CssBaseline,Grid } from "@material-ui/core";
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
      <Container className={classes.container} maxWidth="xl">
        <Logo />
        <Grid container>
          <Grid xs={4} item>
            {children}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

interface AuthLayout {
  title: string;
}
