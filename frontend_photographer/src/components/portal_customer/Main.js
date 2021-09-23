import React from "react";
import "../../css/Main.css";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Profile from './Profile';

function Main() {
  return (
    <div id="navbar-font-size">
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <Link id="logo-text" to="/">
              LOGO
            </Link>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div className="menu-link">
          <ul>
            <li>
              <Link to="/top-destination">Top Destination</Link>
            </li>
            <li>
              <Link to="/bookings">Bookings</Link>
            </li>
            <li>
              <Link to="/Blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
        <div className="button" id="button-disable">
          <DropdownButton title="More" id="more-dropdown">
            {/* <Dropdown.Menu show> */}
            <Dropdown.Item eventKey="1" id="dropdown">
              <Link to="/Profile"> Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="3" id="dropdown">
              <Link to="/logout"> Log out</Link>
            </Dropdown.Item>
            {/* <Dropdown.Divider /> */}
            <Dropdown.Item eventKey="4" id="dropdown">
              <Link to="/delete_account"> Delete account</Link>
            </Dropdown.Item>
            {/* </Dropdown.Menu> */}
          </DropdownButton>
        </div>
      </nav>
    </div>
  );
}

export default Main;