import React, { Component } from 'react';
import './App.css';
import AWSAppSyncClient from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import AppSyncConfig from './awsconfiguration';
import { ApolloProvider } from 'react-apollo';
import AllTodosWithData from "./containers/AllTodosWithData";
import AddTodoOffline from "./containers/AddTodoOffline";


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
        <AllTodosWithData />
        <AddTodoOffline />
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

