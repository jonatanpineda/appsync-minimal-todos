import React from 'react';

class Todos extends React.Component {
  render() {
    const { listTodos, refetch } = this.props.data;
    return (
      <div>
        <button onClick={() => refetch()}>Refresh</button>
        <ul>{listTodos && listTodos.items.map(todo => <li key={todo.id}>{todo.id + ' name: ' + todo.name}</li>)}</ul>
      </div>
    )
  }
}

export default Todos;