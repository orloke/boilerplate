import Head from 'next/head';
import { client } from '../graphql/apollo';
import { GetPlacesDocument, GetPlacesQuery } from '../graphql/generated';
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

export const getStaticProps = async () => {
  const { data } = await client.query<GetPlacesQuery>({
    query: GetPlacesDocument,
  });

  return {
    props: {
      places: data.places,
    },
  };
};
