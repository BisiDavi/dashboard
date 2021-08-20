import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "@store/store";
import Layout from "@layouts/Layout";

import "@styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
