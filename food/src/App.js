import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./nav.js";

const menu = {
  drinks: [
    {
      name: "Whisky",
      price: "$101"
    }
  ],
  food: [
    {
      name: "WhiskyBread",
      price: "$102"
    }
  ],
  dessert: [
    {
      name: "Whisky Ice Cream",
      price: "$103"
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
const MenuItem = ({ item }) => {
  return (
    <div className="MenuItem well">
      <p>
        {item.name}
      </p>
      <p>
        {item.price}
      </p>
    </div>
  );
};

let makeSections = () => {
  let sections = [];
  for (let item in menu) {
    sections.push(<MenuItem key={item} item={item} />);
  }
  console.log("sections = ", sections);
  return sections;
};
class Menu extends Component {
  render() {
    return (
      <div className="menu">
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
      <div className="directions">
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
      <div className="pricing">
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
