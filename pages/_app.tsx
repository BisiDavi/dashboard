import { PersistGate } from "redux-persist/integration/react";
import {
    Provider as AuthProvider,
    useSession,
    getProviders,
} from "next-auth/client";
import { useEffect, useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";

import store, { persistor } from "@store/store";
import Layout from "@layouts/Layout";
import Spinner from "@components/Spinner";
import Signin from "@pages/auth/[...signin]";
import "nprogress/nprogress.css";
import "@styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const [loadingState, setLoading] = useState(false);
    const [loading] = useSession();
    console.log("session _app", session, "loading _app", loading);

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

    //if (loading !== null && loading !== undefined) {
    //    return <Spinner />;
    //}
    return (
        <AuthProvider
            options={{ clientMaxAge: 0, keepAlive: 0 }}
            session={pageProps?.session}
        >
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    {session ? (
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    ) : (
                        <Signin />
                    )}
                </PersistGate>
            </Provider>
        </AuthProvider>
    );
}

export default MyApp;
