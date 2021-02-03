import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

export default class App extends Component {
  state = {
    todos: [
      {id : 1, content: "buy some milk"},
      {id : 2, content: "buy some flour"}
    ]
  }

  handleDelete = (id) => {
    const todos = this.state.todos.filter( todo => {
      return todo.id !== id
    });
    this.setState({
      todos: todos
    })
  }
  addTodo = (todo) =>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="todo-app">
        <h1 className="app-text">Todo's</h1>
        <Todos todos={this.state.todos} handleDelete={this.handleDelete}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}
