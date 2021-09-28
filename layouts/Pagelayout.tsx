import { PropsWithChildren } from "react";
import Head from "next/head";
import { Grid } from "@material-ui/core";
import { pagelayoutStyle } from "@styles/Pagelayout.style";
import Sidebar from "@components/Sidebar";
import Header from "@components/Header";
import useRedux from "@hooks/useRedux";
import { stateFromReduxType } from "../types/";
interface PagelayoutProps {
    title: string;
}

type reduxType =
    | {
          sidebarMenu: boolean;
      }
    | {
          product: any;
      }
    | {
          theme: string;
          toggleTheme: boolean;
      };

export default function Pagelayout({
    children,
    title,
}: PropsWithChildren<PagelayoutProps>) {
    const classes = pagelayoutStyle();
    const { stateFromRedux } = useRedux("ui");
    const { sidebarMenu }: any = stateFromRedux;

    return (
        <>
            <Head>
                <title>Office Dashboard | {title}</title>
            </Head>
            <Grid container className={classes.root}>
                <Grid item xs={12} className={classes.appBarContainer}>
                    <Header />
                </Grid>
                <Grid className={classes.content} container>
                    {sidebarMenu && (
                        <Grid item lg={2} md={3} xs={12} className={classes.sidebarContainer}>
                            <Sidebar />
                        </Grid>
                    )}
                    <Grid
                        item
                        sm={12}
                        md={9}
												lg={10}
                        component="main"
                        className={classes.mainContainer}
                    >
                        {children}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}
