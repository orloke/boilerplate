import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '../../styles/global';
import { client } from '../graphql/apollo';
import NextNProgress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Trips</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="A simple project to show my favorite spots in the world."
        />
      </Head>
      <GlobalStyles />
      <NextNProgress
        color="green"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
