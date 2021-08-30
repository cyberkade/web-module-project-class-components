import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [],
    }
  }

  handleCompleted = id => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.map((todo) => {
        if(todo.id === id) {
          return ({...todo, completed: !todo.completed})
        } else {
          return todo;
        }
      })
    })
  }

  handleAdd = todo => {

    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todoList: [...this.state.todoList, newTodo]
    })
    console.log(newTodo);
    console.log(this.state.todoList);
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todoList: this.state.todoList.filter(todo => {
        return(todo.completed === false)
      })
    })
  }

  render() {
    return (
      <div className='container'>
        <h2>What is There Todo Today?</h2>
        <TodoForm handleAdd={this.handleAdd} />
        <TodoList handleClear={this.handleClear} handleCompleted={this.handleCompleted} todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;
