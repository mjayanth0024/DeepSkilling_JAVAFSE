import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.sayHello();
  }

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  sayHello = () => {
    console.log("Hello! Welcome to Event Handling in React.");
  }

  sayWelcome = (message) => {
    alert(message);
  }

  handleSyntheticEvent = (e) => {
    e.preventDefault();
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>React Event Handling Example</h1>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handleSyntheticEvent}>Synthetic Event (OnPress)</button>
        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
