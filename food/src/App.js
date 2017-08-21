import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./nav.js";

const menu = {
  drinks: [
    {
      name: "Whisky",
      price: "$100"
    }
  ],
  food: [
    {
      name: "WhiskyBread",
      price: "$100"
    }
  ],
  dessert: [
    {
      name: "Whisky Ice Cream",
      price: "$100"
    }
  ]
};

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
//menu: sections / sections are made of items ?
//menu section
//menu items
const menuSection = ({ section }) => {
  const poopOutItems = section.map(item => <MenuItem item />);

  return (
    <div className="container">
      {poopOutItems}
    </div>
  );
};
const MenuItem = ({ menuItem }) => {
  const { name, price } = menuItem;
  return (
    <div className="MenuItem well">
      <p>
        {name}
      </p>
      <p>
        {price}
      </p>
    </div>
  );
};
let makeSections = () => {
  let sections = [];
  for (let key in menu) {
    sections.push(<MenuItem key />);
  }
  console.log("sections = ", sections);
  return sections;
};
class Menu extends Component {
  render() {
    return (
      <div id="menu" className="menu">
        <h2>"this is the menu"</h2>
        <div className="sections">
          {makeSections()}
        </div>
      </div>
    );
  }
}
class Directions extends Component {
  render() {
    return (
      <div id="directions" className="directions">
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
