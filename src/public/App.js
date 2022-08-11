import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Fuel Tracker</h1>
        <input type="text" placeholder="Enter amount of fuel..."></input>
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default App;
