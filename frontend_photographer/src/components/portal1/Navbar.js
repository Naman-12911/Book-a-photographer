import React from "react";
import  navbar_logo from "../image/navbar_logo.PNG";
// import { Link } from "react-router-dom";
import "../../css/Navbar.css";

function Navbar() {
  return (
    <div class="main-header">
        <div class="inner-header">
            <div class="inner-logo">
              <div className='navimg'> <img id='nav_img' src={navbar_logo} alt="" />
              </div>
              <div className='logodiv'><a id ='nav_text'href="#">Photography</a>
              </div>
            </div>
            <div class="header-link"><a  id ='nav-id' href="Contact">Contact</a></div>
            <div class="header-link"><a  id ='nav-id' href="About">About</a></div>
            
        </div>
    </div>
  );
}
export default Navbar;
