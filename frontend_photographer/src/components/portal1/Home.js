import React from "react";
import { Link } from "react-router-dom";
import "../../css/index.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="intro">
          <p>Looking for a Photographer! yes</p>
          <h1>
            <span> Hire </span> and <span> Earn Money </span>by Photography
          </h1>
          <p className="detail">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            provident magni, ratione aliquid accusamus quos repudiandae aut quas
            culpa deserunt delectus suscipit nulla consequuntur eum vero
            reprehenderit, quisquam sed sequi.
          </p>
          <Link to="/form/LogIn" className="header-btn">
            Hire a Photographer
          </Link>
          <br />
        </div>
      </div>
    </>
  );
};

export default Header;
