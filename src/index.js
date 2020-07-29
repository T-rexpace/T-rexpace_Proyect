import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import App from './components/App';

const client = new ApolloClient({
  uri: 'http://ec2-54-234-62-6.compute-1.amazonaws.com:8080/api/graphql'
})

ReactDOM.render(
  <ApolloProvider client={ client }>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
