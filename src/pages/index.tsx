import { NextSeo } from 'next-seo';
import { useEffect } from 'react';
import useAppData from '../data/useAppContext';
import { client } from '../graphql/apollo';
import {
  GetPlacesDocument,
  GetPlacesQuery,
  PostPageDocument,
  PostPageMutation,
} from '../graphql/generated';
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

  // const postPage = await client.mutate<PostPageMutation>({
  //   mutation: PostPageDocument,
  //   variables: {
  //     slug: 'seila1235',
  //     heading: 'olá',
  //     body: {
  //       children: [{ type: 'paragraph', children: [{ text: 'olá a todos' }] }],
  //     },
  //   },
  // });

  // console.log(postPage);

  return {
    revalidate: 5,
    props: {
      places: data.places,
    },
  };
};
