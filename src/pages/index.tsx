import { NextSeo } from 'next-seo';
import { client } from '../graphql/apollo';
import { GetPlacesDocument, GetPlacesQuery } from '../graphql/generated';
import { HomeTemplate } from '../Templates/Home';
import { MapProps } from '../types/types';

const Home = ({ places }: MapProps) => {
  return (
    <>
      <NextSeo
        title="My trips"
        description="A simple project to show in a map some places."
        canonical="https://my-trips.orloke.com.br"
      />
      <HomeTemplate places={places} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await client.query<GetPlacesQuery>({
    query: GetPlacesDocument,
    fetchPolicy: 'no-cache',
  });

  return {
    revalidate: 5,
    props: {
      places: data.places,
    },
  };
};
