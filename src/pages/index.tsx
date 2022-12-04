import Head from 'next/head';
import { HomeTemplate } from '../Templates/Home';
import { MapProps } from '../types/types';

const Home = ({ places }: MapProps) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeTemplate places={places} />
    </>
  );
};

export default Home;
