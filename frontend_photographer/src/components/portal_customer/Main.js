import React from "react";
import "../../css/Main.css";
import  new_logo from "../image/new_logo.png";
import { Link ,useHistory} from "react-router-dom";
import ai from "../Apis"
import { Dropdown, DropdownButton } from "react-bootstrap";

function Main({authInfo,setauthInfo}) {
const history = useHistory()
const handleLogout=()=>{
  localStorage.clear()
  setauthInfo({...authInfo,loggedIn:false})
  history.push("/")
}
// delete user request 
const handleDelete=()=>{
  ai.delete("account/delete-account/", { headers: {"Authorization" : `Bearer ${localStorage.getItem("token")}`}})
  .then(res => {
    console.log(res.data);
    alert("Your Account has been delete")

})
.catch((err) => {
  console.log(err);
  alert("contact Our Team")
  
})
  localStorage.clear()  
  setauthInfo({...authInfo,loggedIn:false})
  history.push("/")
}
  return (
    <div>
      <div id="navbar-font-size">
        <nav className="main-nav" id="main-navbar">
          {/* 1st logo part  */}
          <div className='navimg_main'> <img id='nav_img' src={new_logo} alt="" />
              </div>
          <div className='logodiv_main'><Link id ='nav_text' to="/">PhotoEpic</Link>
              </div>

          {/* 2nd menu part  */}
          <div className="menu-link">
            <ul>
            <li>
                <Link to="/">Photographers</Link>
              </li>
              <li>
                <Link to="/top-destination">Top Destination</Link>
              </li>
              <li>
                <Link to="/booking">Bookings</Link>
              </li>
            </ul>
          </div>
          <div className="button" id="button-disable">
            <DropdownButton title="more" id="more-dropdown">
              <Dropdown.Item eventKey="1" id="dropdown">
                <Link to="/cutomer/Profile">My Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="3" id="dropdown">
                <p onClick={handleLogout}> Log out</p>
              </Dropdown.Item>

              <Dropdown.Item eventKey="4" id="dropdown">
                <p onClick={handleDelete}> Delete account</p>
              </Dropdown.Item>
              {/* </Dropdown.Menu> */}
            </DropdownButton>
          </div>
        </nav>
      </div>
      </div>
  );
}

export default Main;