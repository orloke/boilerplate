import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import useAppData from '../data/useAppContext';
import { client } from '../graphql/apollo';
import { GetPlacesDocument, GetPlacesQuery } from '../graphql/generated';
import { HomeTemplate } from '../Templates/Home';
import { MapProps } from '../types/types';

const Home = ({ places }: MapProps) => {
  const { setPlace } = useAppData();
  useEffect(() => {
    setPlace(places);
  }, [places, setPlace]);
  return (
    <>
      <NextSeo
        title="My trips"
        description="A simple project to show in a map some places."
        canonical="https://my-trips.orloke.com.br"
      />
      <HomeTemplate />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const { data } = await client.query<GetPlacesQuery>({
    query: GetPlacesDocument,
    variables: {
      first: 100,
    },
    fetchPolicy: 'no-cache',
  });

  return {
    revalidate: 5,
    props: {
      places: data.places,
    },
  };
};
