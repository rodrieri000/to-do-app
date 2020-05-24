import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '', 
      todos: ['test', 'test2', 'test3'], 
      isClicked: false
    };
  }

  handleClick = () => {
    this.setState({
      isClicked: true,
      todos: [...this.state.todos, this.state.text], 
      text: ''
    });
  }

  onChange = event => {
    this.setState({
      text: event.target.value
    })
  };

  handleDelete = (index) => () => {
    const todosCopy = [...this.state.todos];
    todosCopy.splice(index, 1);

    this.setState({
      todos: todosCopy,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='App-input'>
            <h1>To Do List</h1>
            <input value={this.state.text} onChange={this.onChange}></input>
            <button onClick={this.handleClick}>{this.state.isClicked}Add</button>
          <div className="App-list">
            {this.state.todos.map((todo, index) => (
              <div key={index}>
                {todo}
                <button onClick={this.handleDelete(index)}>Delete</button>
              </div>
          ))}
          </div>
          </div>
        </header>
      </div>
    );
  }


}
export default App;
