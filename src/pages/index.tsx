import React, { ReactNode } from 'react';
import { graphql } from 'gatsby';
import { Query } from '../graphql-types';

interface Props {
  data: Query;
}

export default function Home({ data }: Props) {
  return <div>Hello world!</div>;
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
