import React from "react";
import { Link } from "react-router-dom";
import "../../css/index.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="intro">
          <p>Looking for a Photographer!</p>
          <h1>
            <span> Hire </span> and <span> Earn Money </span>by Photography
          </h1>
          <p className="detail">
          Photography is an artistic pursuit, and like all art forms, 
          the attraction lies not in its earning potential but in the person’s desire to do something fun, creative, and worthwhile.
          </p>
          <Link to="/form/LogIn" className="header-btn">
           Get Started
          </Link>
          <br />
        </div>
      </div>
    </>
  );
};

export default Header;
