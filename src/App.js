import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '', 
      todos: [], 
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
          <input value={this.state.text} onChange={this.onChange}></input>
          <button onClick={this.handleClick}>{this.state.isClicked ? 'True': 'False'}</button>

          {this.state.todos.map((todo, index) => (
            <div key={index}>
              <button onClick={this.handleDelete(index)}>Delete</button>
              {todo}
            </div>
          ))}
        </header>
      </div>
    );
  }


}
export default App;
