import React from 'react'
import boy from "../image/boy.png";
import "../../css/Main.css";
function Main_navbar() {
    return (
        <div>
            <div id="color-height">
                <img src={boy} alt="img" id="boyset"></img>
                <h2 id="livethe"> Live The Passion</h2>
                <h1 id="typewriter"> Book the Photographer</h1>
            </div>
        </div>
    )
}

export default Main_navbar
