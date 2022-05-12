import React from "react";
import { Link } from "react-router-dom";
import '../../css/photo_navbar.css';
import {useHistory} from "react-router-dom";
function Sidebar({authInfo,setauthInfo}) {
    const history = useHistory()
    const handleLogout=()=>{
      localStorage.clear()
      setauthInfo({...authInfo,loggedIn:false})
      history.push("/")
    }
    return (

        <>
            <div className="photo-container wrapper">
                <div className="photo-side sidebar uhe-sidebar">
                    <h2>PHOTOEPIC</h2>
                    <ul>
                        <li><Link to="/">My Profile</Link></li>
                        {/* <li><i className="bi bi-bell"><Link to="/">Bookings</Link></i></li> */}
                        {/* <li><i className="bi bi-speedometer2"></i> <Link to="/chatting">Chatting</Link></li> */}
                        <li><Link href="#"><p onClick={handleLogout}>Logout</p></Link></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Sidebar;