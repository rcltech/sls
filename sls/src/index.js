import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import './index.css';
import App from './App';
import { Loading } from './components/Loading';
import * as serviceWorker from './serviceWorker';

const Index = () => {
  const [client, setClient] = useState(undefined);

  useEffect(() => {
    const uri =
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4000/graphql'
        : 'https://phoenix.rctech.club/graphql';
    const link = new HttpLink({
      uri
    });

    const cache = new InMemoryCache();
    cache.writeData({
      data: {}
    });

    const client = new ApolloClient({
      cache,
      link
    });

    setClient(client);
  }, []);

  if (!client) return <Loading />;

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

const IndexWithTheme = () => {
  return (
    <ThemeProvider theme={theme}>
      <Index />
    </ThemeProvider>
  );
};

ReactDOM.render(<IndexWithTheme />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
