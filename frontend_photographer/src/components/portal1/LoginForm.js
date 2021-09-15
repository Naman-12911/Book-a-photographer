import React, { useState } from "react";
import axios from "axios";

function LoginForm(props) {
  const url = "http://localhost:8000/account/login/";
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { setLogin } = props;
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
        {/* email input */}
        <div className="FormField">
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
        {/* password input */}
        <div className="FormField">
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
          <p onClick={() => setLogin("signup")} className="FormField__link">
            Create an Account
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
