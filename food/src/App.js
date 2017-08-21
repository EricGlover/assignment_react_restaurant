import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./nav.js";

const menu = {
  drinks: {
    name: "Drinks",
    items: [
      {
        name: "Whisky",
        price: "$101"
      },
      {
        name: "Scotch",
        price: "$3"
      },
      {
        name: "Burbon",
        price: "$12"
      },
      {
        name: "Empty Mason Jar",
        price: "$.75"
      }
    ]
  },
  food: {
    name: "Food",
    items: [
      {
        name: "Whisky Bread",
        price: "$102"
      },
      {
        name: "Scotch Bread",
        price: "$102"
      },
      {
        name: "Burbon Bread",
        price: "$102"
      }
    ]
  },
  dessert: {
    name: "Dessert",
    items: [
      {
        name: "Whisky Ice Cream",
        price: "$103"
      },
      {
        name: "Gin Ice Cream",
        price: "$103"
      },
      {
        name: "Scotch Ice Cream",
        price: "$103"
      }
    ]
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Jumbotron />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

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

const MenuItem = ({ item }) => {
  return (
    <div className="MenuItem">
      <p>
        {item.name}
      </p>
      <p>
        {item.price}
      </p>
    </div>
  );
};

const MenuSection = ({ items, name }) => {
  return (
    <div className="container well">
      <h2>
        {name}
      </h2>
      {items.map(item => <MenuItem item={item} key={item.name} />)}
    </div>
  );
};
class Menu extends Component {
  render() {
    let sections = Object.keys(menu).map(section => {
      return (
        <MenuSection
          items={menu[section].items}
          name={menu[section].name}
          key={menu[section].name}
        />
      );
    });
    return (
      <div className="menu">
        <h2>Menu</h2>
        <div className="sections">
          {sections}
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
