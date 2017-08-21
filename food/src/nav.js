import React from "react";

const Nav = ({ links }) => {
  return (
    // <nav className='nav nav-default'>
    //
    // </nav>
    <nav className="navbar navbar-inverse myNav">
      <div className="container-fluid">
        <div className="navbar-header" />
        <a className="navbar-brand" href="#home">
          Restaurant
        </a>
        <ul className="nav navbar-nav">
          <li>
            <a className="nav-item nav-link active" href="#home">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li>
            <a className="nav-item nav-link" href="#Drinks">
              Drinks
            </a>
          </li>
          <li>
            <a className="nav-item nav-link" href="#Food">
              Food
            </a>
          </li>
          <li>
            <a className="nav-item nav-link" href="#reservations">
              Reservations
            </a>
          </li>
          <li>
            <a className="nav-item nav-link" href="#directions">
              Directions
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
