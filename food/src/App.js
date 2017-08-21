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
        <Menu />
        <Directions />
        <Pricing />
      </div>
    );
  }
}
class Menu extends Component {
  render() {
    return (
      <div id="menu" className="menu">
        <Nav />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>"this is the menu"</h2>
        </div>

        <p className="App-intro">"menu stuff here"</p>
      </div>
    );
  }
}
class Directions extends Component {
  render() {
    return (
      <div id="directions" className="directions">
        <Nav />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>"this is the menu"</h2>
        </div>

        <p className="App-intro">"menu stuff here"</p>
      </div>
    );
  }
}
class Pricing extends Component {
  render() {
    return (
      <div id="pricing" className="pricing">
        <Nav />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>"this is the menu"</h2>
        </div>

        <p className="App-intro">"menu stuff here"</p>
      </div>
    );
  }
}
export default App;
