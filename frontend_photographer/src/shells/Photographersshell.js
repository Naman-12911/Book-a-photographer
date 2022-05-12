import React from "react";
<<<<<<< HEAD
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
=======
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
>>>>>>> a022e020b976186569b3274bf89df1d082162c7d
        
       </Switch>
       
            
    </>
    )
}

export default Photographersshell;
