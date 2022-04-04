import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Appshell from "./shells/Appshell";
import Root from "./shells/Root";
import { token } from "./Helper"

// Root is a portal 1 where all the data componets come.
// Appshell is portal 2 where all the components are come
// if true == portal 2
// else portal 1
const App = () => {
  // app.js file
  const [authInfo, setauthInfo] = useState({})
  console.log(authInfo, "app ka hai")
  // const my_token = token()
  useEffect(() => {
    let acc_token = localStorage.getItem("token")
    if (acc_token) {
      setauthInfo({ ...authInfo })
    }
  }, [])

  return (
    <>

      <Router>{authInfo?.tokens?.access ? <Appshell authInfo={authInfo} setauthInfo={setauthInfo} />
        : <Root authInfo={authInfo} setauthInfo={setauthInfo} />}</Router>
      {/* <Router>{true ? <Appshell /> : <Root />}</Router> */}


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
