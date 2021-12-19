import React from "react";
import  navbar_logo from "../image/navbar_logo.PNG";
 import { Link } from "react-router-dom";
import "../../css/Navbar.css";

function Navbar() {
  return (
    <div class="main-header">
        <div class="inner-header">
            <div class="inner-logo">
              <div className='navimg'> <img id='nav_img' src={navbar_logo} alt="" />
              </div>
              <div className='logodiv'><Link id ='nav_text' to="/">PhotoEpic</Link>
              </div>
            </div>
            <div class="header-link"><Link  id ='nav-id' to="Contact">Contact</Link></div>
            <div class="header-link"><Link  id ='nav-id' to="About">About</Link></div>
            
        </div>
    </div>
  );
}
export default Navbar;
