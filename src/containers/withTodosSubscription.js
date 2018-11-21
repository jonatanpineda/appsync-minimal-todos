import React from 'react';
import {buildSubscription} from "aws-appsync";
import SubscribeTodos from "../graphql/subscriptions/SubscribeTodos";
import AllTodos from "../graphql/queries/AllTodos";

const withTodosSubscription = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      this.props.data.subscribeToMore(
        buildSubscription(
          SubscribeTodos,
          AllTodos
        )
      );
    }

    render() {
      return (
        <WrappedComponent { ...this.props }/>
      );
    }
  }
};

export default withTodosSubscription;