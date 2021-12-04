import React,{useState,useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import Appshell from "./shells/Appshell";
import Root from "./shells/Root";

// Root is a portal 1 where all the data componets come.
// Appshell is portal 2 where all the components are come
// if true == portal 2
// else portal 1
const App = () => {
  // app.js file
  const [authInfo, setauthInfo] = useState({loggedIn:false})
  const[token]=useLocalStorage("token")
  console.log("app", token)
  useEffect(() => {
  }, [authInfo.loggedIn])
  return (
    <>
      {/* <Router>{token ? <Appshell/> : <Root   authInfo={authInfo} setauthInfo={setauthInfo} />}</Router> */}
      <Router>{true ? <Appshell /> : <Root />}</Router>
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
