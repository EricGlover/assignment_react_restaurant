import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./nav.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">Things here</p>
      </div>
    );
  }
}

export default App;