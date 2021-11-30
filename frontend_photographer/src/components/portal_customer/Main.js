import React from "react";
import "../../css/Main.css";
import  new_logo from "../image/new_logo.png";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";


//      My Changes

//  Constructor(props){
//    super(props)
//    const token = localStorage.getItem("token")
//    let loggedIn = true
//    if (token == null){
//      loggedIn = false
//    }
//    this.state= {
//      loggedIn
//    }
//  }


function Main() {
<<<<<<< HEAD
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

  
=======
>>>>>>> 6ab6cc5ae5fb5d200b3338b675598d5e30047d2c
  return (
    
    <>
      <div id="navbar-font-size">
        <nav className="main-nav" id="main-navbar">
          {/* 1st logo part  */}
          <div className='navimg_main'> <img id='nav_img' src={new_logo} alt="" />
              </div>
          <div className='logodiv_main'><Link id ='nav_text' to="/">Photography</Link>
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
                <Link to="#">Bookings</Link>
              </li>
              {/* <li>
                <Link to="#">contact</Link>
              </li> */}
            </ul>
          </div>
          <div className="button" id="button-disable">
            <DropdownButton title="more" id="more-dropdown">
              <Dropdown.Item eventKey="1" id="dropdown">
                <Link to="/photographer_portal/Profile">My Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="3" id="dropdown">
                <Link to="#"> Log out</Link>
              </Dropdown.Item>

              <Dropdown.Item eventKey="4" id="dropdown">
                <Link to="#"> Delete account</Link>
              </Dropdown.Item>
              {/* </Dropdown.Menu> */}
            </DropdownButton>
          </div>
        </nav>
      </div>
<<<<<<< HEAD
      <div id="color-height">
        <img src={boy} alt="img" id="boyset"></img>
        <h2 id="livethe"> Live The Passion</h2>
        <h1 id="typewriter"> Book the Photographer</h1>
      </div>
          
      
=======
>>>>>>> 6ab6cc5ae5fb5d200b3338b675598d5e30047d2c
    </>
  );
}

export default Main;
