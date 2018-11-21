import {compose, graphql} from 'react-apollo';
import AllTodos from '../graphql/queries/AllTodos';
import Todos from '../components/Todos';
import withTodosSubscription from "./withTodosSubscription";

export default compose(
  graphql(AllTodos),
  withTodosSubscription
)(Todos);