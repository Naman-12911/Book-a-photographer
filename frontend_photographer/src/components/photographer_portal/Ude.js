import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Link} from "react-router-dom";

import '../../css/photo_navbar.css';

function Ude() {

    return( 

 <>  
     <div className="photo-container wrapper">
        <div className="photo-side sidebar">
            <h2>PHOTOEPIC</h2>
            <ul>
                {/* <li><Link><a href="#"><i class="fa fa-home"></i>My Profile</a></Link></li> */}
                <li><i class="bi bi-house-door"></i><Link to="/Photoprofile">My Profile</Link></li>
                <li><a href="#"><i className="bi bi-bell"></i>Notification</a></li>
                <li><a href="#"><i class="bi bi-speedometer2"></i>Dashboard</a></li>
                <li><a href="#"><i className="bi bi-box-arrow-left"></i> LogOut</a></li>
            </ul>
        </div>
    </div> 
    
    </>
    )
}

export default Ude;
