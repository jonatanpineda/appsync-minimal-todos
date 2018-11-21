import AddTodo from '../components/AddTodo';
import { graphqlMutation } from 'aws-appsync-react';
import NewTodo from '../graphql/mutations/NewTodo';
import AllTodos from '../graphql/queries/AllTodos';

export default graphqlMutation(NewTodo, AllTodos, 'Todo')(AddTodo);
