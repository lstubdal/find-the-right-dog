import React from "react";
import "@component/styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import Footer from "../components/footer";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
