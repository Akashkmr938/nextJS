import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Online Gift Voucher Website | Indus Shop Plus</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
