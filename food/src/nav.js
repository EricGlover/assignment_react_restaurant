import React from "react";

const Nav = ({ links }) => {
  return (
    // <nav className='nav nav-default'>
    //
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Restaurant
      </a>
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">
          Home <span className="sr-only">(current)</span>
        </a>
        <a className="nav-item nav-link" href="#">
          Menu
        </a>
        <a className="nav-item nav-link" href="#">
          Reservations
        </a>
        <a className="nav-item nav-link" href="#">
          Directions
        </a>
      </div>
    </nav>
  );
};

export default Nav;
