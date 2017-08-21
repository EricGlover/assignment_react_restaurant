import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./nav.js";

const menu = [drinks, food, dessert];
const drinks = [
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
];

const menu = {
  drinks: [
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
Object.keys(menu).map(key =>
  console.log("key is = ", key, " menu[key] = ", menu[key])
);
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

// let makeSections = () => {
//   let sections = [];
//   for (let item in menu) {
//     sections.push(<MenuItem key={item} item={item} />);
//   }
//   console.log("sections = ", sections);
//   return sections;
// };
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
    return (
      <div className="menu">
        <h2>Menu</h2>
        <div className="sections">
          {Object.keys(menu).map(function(key) {
            return (
              <MenuSection
                items={{ items: menu[key], name: "drink" }}
                key={key}
              />
            );
          })}
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
