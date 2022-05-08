import React from "react";
//import Ude from "../components/photographer_portal/Ude";
import Photoprofile from '../components/photographer_portal/Photoprofile';
import { Switch, Route } from "react-router-dom";
import Sidebar from "../components/photographer_portal/Sidebar";
// import Chatting from "../components/photographer_portal/Chatting";

function Photographersshell({ authInfo, setauthInfo }) {
    return (
    <>
    
    {<Sidebar  setauthInfo={setauthInfo} authInfo={authInfo}/>}
       <Switch>
        <Route path="/">
            <Photoprofile />  
        </Route>
        
       </Switch>
       
            
    </>
    )
}

export default Photographersshell;
