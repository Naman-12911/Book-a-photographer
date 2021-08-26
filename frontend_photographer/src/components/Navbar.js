import React from "react";
import logo from "./image/logo3.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-margin">
      <a href="/" className="logo">
        <img src={logo} alt="logo" />
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-btn" for="menu-btn">
        <span className="nav-Icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      {/*<a href='/' className='sig-log'>SignUp</a>
      <a href='/' className='sig-log'>LogIn</a> */}
    </nav>
  );
}
export default Navbar;
