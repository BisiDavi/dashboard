import Head from "next/head";
import { PropsWithChildren } from "react";
import { Container, Grid } from "@material-ui/core";

import Logo from "@components/Logo";
import { AuthStyles } from "@styles/Authlayout.style";
import AuthDrawer from "@components/AuthDrawer";

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
      <Container className={classes.container} maxWidth="xl">
        <Grid container className={classes.gridContainer}>
          <Grid className={classes.authGrid} item xs={12} md={6} lg={4} xl={6}>
            <Logo />
            <Grid className={classes.content} item>
              {children}
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.fab}>
          <AuthDrawer />
        </div>
      </Container>
    </>
  );
}

interface AuthLayout {
  title: string;
}
