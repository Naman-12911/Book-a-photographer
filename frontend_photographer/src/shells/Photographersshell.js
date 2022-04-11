import React from "react";
import Ude from "../components/photographer_portal/Ude";
import Photoprofile from '../components/photographer_portal/Photoprofile';
import { Switch, Route } from "react-router-dom";
import Chatting from "../components/photographer_portal/Chatting";

function Photographersshell() {
    return (
    <>
        <Ude />
       <Switch>
        <Route path="/Photoprofile">
            <Photoprofile />  
        </Route>
        <Route path="/Chatting">
            <Chatting />  
        </Route>
        
       </Switch>
       
            
    </>
    )
}

export default Photographersshell;
