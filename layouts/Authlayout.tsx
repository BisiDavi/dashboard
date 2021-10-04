import { PropsWithChildren } from "react";
import Head from "next/head";
import Image from "next/image";
import { Container, Grid, Paper } from "@material-ui/core";
import styles from "@styles/Image.module.css";

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
                        lg={6}
                        xl={6}
                    >
                        <Paper className={classes.logoPaper}>
                            <Logo />
                        </Paper>
                        <Grid className={classes.content} item>
                            {children}
                        </Grid>
                    </Grid>
                    <Grid  className={classes.gridImage} item xs={12} lg={6} md={6}>
                        <span className={styles.imageContainer}>
                            <Image
                                src="https://source.unsplash.com/800x600/?nature"
                                alt="nature"
                                className={styles.image}
                                layout="fill"
                            />
                        </span>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

interface AuthLayout {
    title: string;
}
