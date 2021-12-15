import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import "../../css/Form.css";
import photo3 from "../image/photo3.jpg";

function Form({authInfo,setauthInfo}) {
  const [login, setLogin] = useState("login");
  return (
    <>
      <div className="App">
        <div className="App__Aside">
          <img src={photo3} alt="photo2" />
        </div>
        <div className="App__Form">
          <div className="PageSwitcher"></div>
          <div className="FormTitle">
            <button
              className="FormTitle__Link"
              onClick={() => setLogin("login")}
            >
              Log In
            </button>{" "}
            or{" "}
            <button
              className="FormTitle__Link "
              onClick={() => setLogin("signup")}
            >
              Sign Up
            </button>
            {login === "login" ? (
              <LoginForm setLogin={setLogin} authInfo={authInfo} setauthInfo={setauthInfo} />
            ) : (
              <SignupForm />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
