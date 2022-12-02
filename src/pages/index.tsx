import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('../Components/Map'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Map
        places={[
          {
            id: '1',
            name: 'Goiania',
            slug: 'goiania',
            location: {
              latitude: -16.6869,
              longitude: -49.2648,
            },
          },
        ]}
      />
    </>
  );
};

export default Home;
