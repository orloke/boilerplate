import type { NextPage } from 'next';
import Head from 'next/head';
import { Main } from '../Components/Main';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Main />
    </>
  );
};

export default Home;
