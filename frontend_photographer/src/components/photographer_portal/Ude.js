import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Link} from "react-router-dom";

import '../../css/photo_navbar.css';

function Ude() {

    return 

 <>  
     <div class="photo-container wrapper">
        <div class="photo-side sidebar">
            <h2>PHOTOEPIC</h2>
            <ul>
                {/* <li><Link><a href="#"><i class="fa fa-home"></i>My Profile</a></Link></li> */}
                <li><Link to="/Photoprofile">My Profile</Link></li>
                <li><a href="#"><i class="fa fa-user"></i>Notification</a></li>
                <li><a href="#"><i class="fa "></i>Settings</a></li>
                <li><a href="#"><i class="fa "></i>LogOut</a></li>
            </ul>
        </div>
    </div> 
    
    </>;
}

export default Ude;
