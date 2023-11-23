import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/globals.css';
import '../../styles/main.js';
import type { AppProps } from 'next/app';
import Head from "next/head";
import Script from 'next/script';
<<<<<<< HEAD

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>SGAPP</title>
          
          <link rel="stylesheet" href="sweetalert2.min.css"></link>
        
        </Head>
        <Script src="sweetalert2.min.js"/>
          <Script src="//cdn.jsdelivr.net/npm/sweetalert2@11"/>
=======
import { SidebarProvider } from '../../src/components/SideBar/SidebarContext'; // Asegúrate de actualizar esta ruta

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SGAPP</title>
        <link rel="stylesheet" href="sweetalert2.min.css"></link>
      </Head>
      <Script src="sweetalert2.min.js"/>
      <Script src="//cdn.jsdelivr.net/npm/sweetalert2@11"/>
      <SidebarProvider>
>>>>>>> 1be5c294a980d49383fb3658c2dfbd8e763789c6
        <Component {...pageProps} />
      </SidebarProvider>
    </>
  );
}
