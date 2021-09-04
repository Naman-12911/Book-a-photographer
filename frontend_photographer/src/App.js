import React, { useState } from "react";
import Navbar from "../src/components/Navbar";
import Home from "./components/Home";
import Footer from "../src/components/Footer";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import About from "./components/About";
import Form from "./components/Form";
import naman from "../src/components/image/Naman Garg.jpeg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//comment

const App = () => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // app.js file
  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact showAlert={showAlert} />
          </Route>
          <Route exact path="/about">
            <About
              para="All rounder"
              head="Naman Garg"
              photo={naman}
              linkdin="https://www.linkedin.com/in/naman-garg-935658201/"
            />
            <About para="Front-end" head="Faizan" linkdin="" photo={naman} />
            <About para="Backend" head="Sourab" linkdin="" photo={naman} />
            <About para="Faltu" head="Kashish" linkdin="" photo={naman} />
          </Route>
          <Route exact path="/form/LogIn">
            <Form />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
