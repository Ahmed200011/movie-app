import React from "react";
import './header.css'
import { NavLink,Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <NavLink to={'/'}> MOVIES</NavLink>
        </div>
        <ul className="nave">
          <li>
            <NavLink to={'/'} className="a"> Watch</NavLink>
          </li>
          <li>
            <NavLink to={'/Watched'} className="a"> Watched</NavLink>
          </li>
          <li>
            <Link to={'/add-movie'} className="btn">Add</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
