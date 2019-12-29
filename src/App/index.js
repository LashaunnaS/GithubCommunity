import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';

import UserData from 'App/components/UserData';
import FormContainer from 'App/components/Form';

import AppLayout from 'shared/styledComponents/AppLayoutStyles';
import Title from 'shared/styledComponents/TitleStyles';

import GlobalStyle from 'shared/styles/GlobalStyle';

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
    <AppLayout>
      {/* add browserrouter, switch, and single route */}
      {/* should render UserData at path '/:username' */}
      <Title>Github Community</Title>
      <BrowserRouter>
        <FormContainer />
        <Switch>
          <Route exact path="/">
            <p style={{ marginTop: '3rem' }}>Who Are You Looking For?</p>
          </Route>
          <Route exact path="/:username">
            <UserData />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppLayout>
    <GlobalStyle />
  </ApolloProvider>
);

export default App;
