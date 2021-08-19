import Head from "next/head";
import { PropsWithChildren } from "react";
import { Container, CssBaseline, Grid} from "@material-ui/core";
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
      <CssBaseline />
      <Container className={classes.container} maxWidth="xl">
        <Grid container className={classes.gridContainer}>
          <Grid className={classes.authGrid} item xs={4}>
            <Logo />
            <Grid className={classes.content} item>
              {children}
            </Grid>
          </Grid>
        </Grid>
        <AuthDrawer />
      </Container>
    </>
  );
}

interface AuthLayout {
  title: string;
}
