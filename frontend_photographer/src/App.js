import React,{useState,useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Appshell from "./shells/Appshell";
import Root from "./shells/Root";
import {token} from  "./Helper"

// Root is a portal 1 where all the data componets come.
// Appshell is portal 2 where all the components are come
// if true == portal 2
// else portal 1
const App = () => {
  // app.js file
  const [authInfo, setauthInfo] = useState({loggedIn:false})
  const my_token = token()
  useEffect(() => {
    let acc_token = localStorage.getItem("token")
    if(acc_token){
      setauthInfo({...authInfo,loggedIn:true})
    }
  }, [my_token])
  
  return (
    <>
<<<<<<< HEAD
      <Router>{authInfo.loggedIn ? <Appshell authInfo={authInfo} setauthInfo={setauthInfo} /> : <Root   authInfo={authInfo} setauthInfo={setauthInfo} />}</Router>
      {/* <Router>{true ? <Appshell /> : <Root />}</Router> */}
=======

      <Router>{authInfo.loggedIn ? <Appshell authInfo={authInfo} setauthInfo={setauthInfo} /> : <Root   authInfo={authInfo} setauthInfo={setauthInfo} />}</Router>
      {/* <Router>{true ? <Appshell /> : <Root />}</Router> */}


>>>>>>> f5f4ae76a2b9472866cfae0da2a0c2bae4f69807
    </>
  );
};

const AppWrapper = () => {
  return (
    <>
      <App />
    </>
  );
};

export default AppWrapper;
