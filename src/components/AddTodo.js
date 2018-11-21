import React from 'react';

class AddTodo extends React.Component {
  state = { name: '', description: '' };

  onChange(event, type) {
    this.setState({
      [type]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <input placeholder={'name'} onChange={(event) => this.onChange(event, "name")} />
        <input placeholder={'description'} onChange={(event) => this.onChange(event, "description")} />
        <button onClick={() => this.props.createTodo({
          name: this.state.name,
          description: this.state.description,
          status: 'pending'
        })}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;