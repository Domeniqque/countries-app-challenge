import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_COUNTRIES_BASE_URL,
});

export const client = new ApolloClient({
  cache,
  link: httpLink,
});
