import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { LinkWrapper } from '../Components/LinkWrapper';
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline';

const Map = dynamic(() => import('../Components/Map'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <LinkWrapper href="/about">
        <InfoOutline size={32} />
      </LinkWrapper>
      <Map />
    </>
  );
};

export default Home;
