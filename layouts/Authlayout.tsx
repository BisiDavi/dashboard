import Head from "next/head";
import { PropsWithChildren } from "react";
import { Container, CssBaseline, Grid } from "@material-ui/core";
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
      <Grid container>
        <Container className={classes.container} maxWidth="xl">
          <Grid className={classes.authGrid} item>
            <Logo />
            <Grid className={classes.content} item>{children}</Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

interface AuthLayout {
  title: string;
}
