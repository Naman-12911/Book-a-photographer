import React from "react";
import Navbar from "../components/portal1/Navbar";
import Home from "../components/portal1/Home";
import Footer from "../components/portal1/Footer";
import Contact from "../components/portal1/Contact";
import About from "../components/portal1/About";
import Form from "../components/portal1/Form";
import naman from "../components/image/Naman Garg.jpeg";
import faizan from "../components/image/faizan.jpeg"
import saurav from "../components/image/saurav.jpeg"
import kashish from "../components/image/kashish.jpeg"
import { Switch, Route } from "react-router-dom";

// portal 1

const App = ({authInfo,setauthInfo}) => {
  // app.js file
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About
            para="Backend developer"
            head="Naman Garg"
            photo={naman}
            linkdin="https://www.linkedin.com/in/naman-garg-935658201/"
          />
           <About
            para="Frontend developer"
            head="Faizan Ahmad"
            photo={faizan}
            linkdin="https://www.linkedin.com/in/faizan-ahmad-913965207/"
          />
          <About
            para="File"
            head="Saurav"
            photo={saurav}
            linkdin="https://www.linkedin.com/in/saurav-singh-20b4821a7"
          />
          <About
            para="File"
            head="Kashish"
            photo={kashish}
            linkdin="https://www.linkedin.com/in/kashu-sharma-671711210/"
          /> 
        </Route>
        <Route path="/form/LogIn">
          <Form authInfo={authInfo} setauthInfo={setauthInfo} />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
