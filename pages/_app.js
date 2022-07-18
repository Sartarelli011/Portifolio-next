import "../styles/globals.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;700&display=swap"
          rel="stylesheet"
        />

        <title>Portifolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
