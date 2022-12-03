import { gql } from '@apollo/client';

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      heading
      id
      slug
      body {
        html
      }
    }
  }
`;

export const GET_PAGES_BY_SLYG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`;
