import React, { useState } from "react";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
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
  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/contact">
            <Contact showAlert={showAlert} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
