import React from "react";
import {Button, Modal} from "react-bootstrap";
import { Link} from "react-router-dom";
import '../../css/chat.css';
import '../../css/photo_navbar.css';

function Ude() {

    return( 

 <>  
     <div className="photo-container wrapper">
        <div className="photo-side sidebar">
            <h2>PHOTOEPIC</h2>
            <ul>
                
                <li><i class="bi bi-house-door"></i>
                <Link to="/Photoprofile">My Profile</Link>
                </li>

                <li><i className="bi bi-bell"></i>
                <Link to="/Chatting">Chatting </Link>
                </li>
                
                
            </ul>
            <br />
            
            <ul>
            <li><a href="#" className="dropdown-itemd-flex align-items-center text-white text-decoration-none "><i className="bi bi-box-arrow-left"></i> Sign Out</a></li>
            </ul>            
            
        </div>
    </div> 
    
    </>
    )
}

export default Ude;
