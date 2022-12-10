import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { client } from '../graphql/apollo';
import NextNProgress from 'nextjs-progressbar';

import SEO from '../../next-seo.config';
import '../styles/global.css';
import { DefaultSeo } from 'next-seo';
import { AppProvider } from '../data/AppContext';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <meta name="theme-color" content="#06092b" />
      </Head>
      <NextNProgress
        color="#4895d2"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <DefaultSeo {...SEO} />
      <ApolloProvider client={client}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ApolloProvider>
    </>
  );
}
