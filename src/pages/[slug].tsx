import { PageTemplate } from '../Templates/Page';
import { client } from '../graphql/apollo';
import { GET_PAGES, GET_PAGES_BY_SLYG } from '../graphql/pages/queries';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { PageTemplateProps } from '../types/types';
import { GetPageBySlugQuery, GetPagesQuery } from '../graphql/generated';

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <PageTemplate heading={heading} body={body} />;
}

export const getStaticPaths = async () => {
  const { data } = await client.query<GetPagesQuery>({
    query: GET_PAGES,
    variables: {
      first: 3,
    },
  });

  const paths = data.pages.map(({ slug }) => ({
    params: { slug },
  }));

  console.log(paths);

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query<GetPageBySlugQuery>({
    query: GET_PAGES_BY_SLYG,
    variables: {
      slug: `${params?.slug}`,
    },
  });

  // if (!data.pages) return { notFound: true };

  return {
    props: {
      heading: data.page?.heading,
      body: data.page?.body.html,
    },
  };
};
