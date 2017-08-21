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

        <div>
          <img src={require("./mapofwesteros.jpg")} />
        </div>

        <Menu />
        <Directions />
        <Pricing />
        <Reservations />
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
      <h2 id={name}>
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
      <div id="directions" className="directions">
        <h1>follow the yellow brick road</h1>
      </div>
    );
  }
}

class Pricing extends Component {
  render() {
    return (
      <div id="pricing" className="directions">
        <h1>Dolla Dolla bills yall </h1>
        <h1>Not hiding anything </h1>
        <h1>hiding</h1>
        <h1>anything </h1>
        <h1>right? </h1>
      </div>
    );
  }
}
class Reservations extends Component {
  render() {
    return (
      <div id="reservations">
        <img src={require("./reservations.jpg")} />;
      </div>
    );
  }
}
export default App;
