import React from "react";
import Ude from "../components/photographer_portal/Ude";
import Photoprofile from '../components/photographer_portal/Photoprofile';
import { Switch, Route } from "react-router-dom";

function Photographersshell() {
    return (
    <>
        <Ude />
       <Switch>
        <Route exact path="/Photoprofile">
            <Photoprofile/>  
        </Route>
        
       </Switch>
       
            
    </>
    )
}

export default Photographersshell;
