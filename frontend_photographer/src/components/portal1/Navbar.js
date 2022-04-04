import React from "react";
import  navbar_logo from "../image/navbar_logo.PNG";
 import { Link } from "react-router-dom";
import "../../css/Navbar.css";


function Navbar() {
  return (
    <div className="main-header">
        <div className="inner-header">
            <div className="inner-logo">
              <div className='navimg'> <img id='nav_img' src={navbar_logo} alt="" />
              </div>
              <div className='logodiv'><Link id ='nav_text' to="/">PhotoEpic</Link>
              </div>
            </div>
            <div className="header-link"><Link  id ='nav-id' to="/contact">Contact</Link></div>
            <div className="header-link"><Link  id ='nav-id' to="/about">About</Link></div>
            
        </div>
    </div>
    
  )
}
export default Navbar;
