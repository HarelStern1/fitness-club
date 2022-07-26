import "../styles/globals.css";
import Head from "next/head";
import Navbar from "../components/Icons/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
