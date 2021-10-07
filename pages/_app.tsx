import { PersistGate } from "redux-persist/integration/react";
import { Provider as AuthProvider } from "next-auth/client";
import { useEffect, useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";

import store, { persistor } from "@store/store";
import Layout from "@layouts/Layout";
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
        <AuthProvider
            options={{ clientMaxAge: 0, keepAlive: 0 }}
            session={pageProps?.session}
        >
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </PersistGate>
            </Provider>
        </AuthProvider>
    );
}

export default MyApp;
