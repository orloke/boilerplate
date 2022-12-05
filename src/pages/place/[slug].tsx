import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { client } from '../../graphql/apollo';
import {
  GetPlaceBySlugDocument,
  GetPlaceBySlugQuery,
  GetPlacesDocument,
  GetPlacesQuery,
} from '../../graphql/generated';
import { PlaceTemplate } from '../../Templates/Places';
import { PlaceTemplateProps } from '../../types/types';

export default function Place({ place }: PlaceTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return (
    <>
      <NextSeo title={place.name} description={place.description.text} />
      <PlaceTemplate place={place} />
    </>
  );
}

export const getStaticPaths = async () => {
  const { data } = await client.query<GetPlacesQuery>({
    query: GetPlacesDocument,
    variables: {
      first: 3,
    },
  });

  const paths = data.places.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query<GetPlaceBySlugQuery>({
    query: GetPlaceBySlugDocument,
    variables: {
      slug: `${params?.slug}`,
    },
    fetchPolicy: 'no-cache',
  });
  if (!data.place) return { notFound: true };

  return {
    revalidate: 5,
    props: {
      place: data.place,
    },
  };
};
