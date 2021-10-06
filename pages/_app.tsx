import { PersistGate } from "redux-persist/integration/react";
import { useEffect, useState } from "react";
import Router from "next/router";
import { SessionProvider } from "next-auth/react";
import NProgress from "nprogress";
import { Provider } from "react-redux";

import store, { persistor } from "@store/store";
import Layout from "@layouts/Layout";
import Auth from "@components/Auth";
import "nprogress/nprogress.css";
import "@styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.on("routeChangeStart", start);
            Router.events.on("routeChangeComplete", end);
            Router.events.on("routeChangeError", end);
        };
    }, []);

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <SessionProvider session={session}>
                    {console.log("component.auth", Component.auth)}
                    {Component.auth ? (
                        <Auth>
                            <Layout>
                                <Component {...pageProps} />
                            </Layout>
                        </Auth>
                    ) : (
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    )}
                </SessionProvider>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
