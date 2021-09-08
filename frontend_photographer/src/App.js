import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Appshell from "./shells/Appshell";
import Root from "./shells/Root";

// Root is a portal 1 where all the data componets come.
// Appshell is portal 2 where all the components are come
// if true == portal 2
// else portal 1
const App = () => {
  // app.js file
  return (
    <>
      <Router>{false ? <Appshell /> : <Root />}</Router>
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
