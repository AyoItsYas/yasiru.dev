import Head from 'next/head';

import '@styles/_app.scss';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
