import Head from "next/head";
import { PropsWithChildren } from "react";
import { Container, Grid, Paper } from "@material-ui/core";

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
            <Container className={classes.container} maxWidth="xl">
                <Grid container className={classes.gridContainer}>
                    <Grid
                        className={classes.authGrid}
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        xl={6}
                    >
                        <Paper className={classes.logoPaper}>
                            <Logo />
                        </Paper>
                        <Grid className={classes.content} item>
                            {children}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

interface AuthLayout {
    title: string;
}
