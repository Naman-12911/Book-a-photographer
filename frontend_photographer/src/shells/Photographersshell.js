import React from "react";
import Ude from "../components/photographer_portal/Ude";
import Photoprofile from '../components/photographer_portal/Photoprofile';
import { Switch, Route } from "react-router-dom";

function Photographersshell() {
    return <div>
        <Ude />
       <Switch>
        <Route path="/">
            <Photoprofile/>  
        </Route>
        
       </Switch>
       
            
    </div>;
}

export default Photographersshell;
