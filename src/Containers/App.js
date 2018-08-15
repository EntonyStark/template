import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="container">
					To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/test-1">First Layout with ise float</Link>
      </div>
    );
  }
}

export default App;
