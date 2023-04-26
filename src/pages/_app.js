import React from 'react';
import '@component/styles/globals.css';
import { Provider } from "react-redux";
import store from "../store";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
