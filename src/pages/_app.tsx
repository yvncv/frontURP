import 'bootstrap/dist/css/bootstrap.css'
import '../../styles/globals.css'
import '../../styles/main.js'
import type { AppProps } from 'next/app'
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>SGAPP</title>
        </Head>
        <Component {...pageProps} />
      </>
  );
}
