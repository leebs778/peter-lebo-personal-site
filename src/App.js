import React, { Component } from 'react';
import logo from './logo.svg';
import peter from './peter_photo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Under Construction!</h1>
        </header>
        <p className="App-intro">
          Thanks for visiting though! Come back soon
        </p>
        <img src={peter} className="Peter-photo" alt="Peter" />
      </div>
    );
  }
}

export default App;
