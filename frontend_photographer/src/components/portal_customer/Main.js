import React, { useEffect, useState } from "react";
import "../../css/Main.css";
import boy from "../image/boy.png";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import ai from "../Apis";
import Profile from "../photographer_portal/Profile";

function Main() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = ai
        .get("photographer-account/photographer-account/")
        .then((res) => {
          console.log(res);
          setPhoto(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      return request;
    }
    fetchData();
  }, []);
  return (
    <>
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
                <Link to="/bokings">Bookings</Link>
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
            <DropdownButton title="more" id="more-dropdown">
              <Dropdown.Item eventKey="1" id="dropdown">
                <Link to="/profile"> Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="3" id="dropdown">
                <Link to="/logout"> Log out</Link>
              </Dropdown.Item>

              <Dropdown.Item eventKey="4" id="dropdown">
                <Link to="/delete_account"> Delete account</Link>
              </Dropdown.Item>
              {/* </Dropdown.Menu> */}
            </DropdownButton>
          </div>
        </nav>
      </div>
      <div id="color-height">
        <img src={boy} alt="img" id="boyset"></img>
        <h2 id="livethe"> Live The Passion</h2>
        <h1 id="typewriter"> Book the Photographer</h1>
      </div>
    </>
  );
}

export default Main;
