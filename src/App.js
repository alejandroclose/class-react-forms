import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    value: 'estado inicial'
  }

handleInput = (e) =>{
  console.log(e.target.value)
  this.setState({
    value: e.target.value,
  })
}
  render() {
    const {value} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" value={value} onChange={this.handleInput}/>
      </div>
    );
  }
}

export default App;
