import Head from "next/head";
import { wrapper } from "../store/store";

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

export default wrapper.withRedux(MyApp);
