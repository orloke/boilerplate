import { PageTemplate } from '../Templates/Page';
import { gql } from '@apollo/client';
import { client } from '../graphql/apollo';

export default function About() {
  return <PageTemplate />;
}

export const getStaticProps = async () => {
  const { data, error, loading } = await client.query({
    query: gql`
      query getPages {
        pages {
          heading
          id
          slug
        }
      }
    `,
  });

  console.log(data);

  return {
    props: {},
  };
};
