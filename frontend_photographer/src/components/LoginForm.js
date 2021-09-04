import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function LoginForm(props) {
  const url = "http://localhost:8000/account/login/";
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  function sumbit(e) {
    e.preventDefault();
    axios
      .post(url, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data);
        setData({
          email: "",
          password: "",
        });
        props.showAlert("Your problem has been sumbitted!", "success");
        //alert("nnnnnnnnnnnn");
      });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <div className="FormCenter">
      <form className="FormFeilds" onSubmit={(e) => sumbit(e)}>
        <div className="FormField">
          <label className="FormField__Label">E-mail</label>
          <input
            type="email"
            className="FormField__Input"
            id="email"
            placeholder="E-mail"
            name="email"
            onChange={(e) => handle(e)}
            value={data.email}
          />
        </div>
        <div className="FormField">
          <label className="FormField__Label">Password</label>
          <input
            type="password"
            className="FormField__Input"
            id="password"
            placeholder="password"
            name="password"
            onChange={(e) => handle(e)}
            value={data.password}
          />
        </div>

        <div className="FormField">
          <button className="FormField__Button mr-20" type="Submit">
            Log In
          </button>
          <Link to="/SignupForm" className="FormField__link">
            Create an Account
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;