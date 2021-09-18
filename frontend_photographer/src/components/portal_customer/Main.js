import React, { useState } from "react";
import "../../css/Main.css";
import { NavLink } from "react-router-dom";
import FormPage from "./FormPage";
import {Dropdown,DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";

function Main()  {
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <a id='logo-text' href='/' >LOGO</a>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div  className= "menu-link">
          <ul>
            <li>
              <NavLink to="/Top-Destination">Top Destination</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/Blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
          </div>
          <div className='button'>
            <DropdownButton title='More'>
              <Dropdown.Menu show>
                <Dropdown.Item eventKey="1">My Profile</Dropdown.Item>
                <Dropdown.Item eventKey="3">Setting</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </DropdownButton>
          </div>
      </nav>
    </>
  )
};

export default Main;