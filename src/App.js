import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AWSAppSyncClient, { buildSubscription } from 'aws-appsync';
import { Rehydrated, graphqlMutation } from 'aws-appsync-react';
import AppSyncConfig from './awsconfiguration';
import { ApolloProvider } from 'react-apollo';


const client = new AWSAppSyncClient({
  url: AppSyncConfig.AppSync.Default.ApiUrl,
  region: AppSyncConfig.AppSync.Default.Region,
  auth: {
    type: AppSyncConfig.AppSync.Default.AuthMode,
    apiKey: AppSyncConfig.AppSync.Default.ApiKey
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>
);

export default WithProvider;

