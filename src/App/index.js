import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import GlobalStyle from 'shared/styles/GlobalStyle';
import Title from 'shared/components/Title';
import Layout from 'shared/components/Layout';

import FormContainer from '../FormContainer';

const GITHUB_BASE_URL = 'https://api.github.com/graphql';
const httpLink = new HttpLink({
  uri: GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
  },
});
const cache = new InMemoryCache();
const client = new ApolloClient({
  link: httpLink,
  cache,
});

const App = () => (
  <ApolloProvider client={client}>
    <Layout>
      <Title>Github Community</Title>
      <FormContainer />
    </Layout>
    <GlobalStyle />
  </ApolloProvider>
);

export default App;
