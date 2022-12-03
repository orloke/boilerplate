import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  ignoreNoDocuments: true,
  schema:
    'https://api-sa-east-1.hygraph.com/v2/clb78s8sr0i3a01um2b2k4l0z/master',
  documents: ['./src/graphql/**/*.graphql'],
  generates: {
    './src/graphql/generated.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
};

export default config;
