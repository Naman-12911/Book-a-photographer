import React, { useState } from "react";
import ai from "../Apis";
function SignupForm(props) {
  // signup api
  const url = "account/register/";
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    password: "",
    type_choice: "",
  });
  function sumbit(e) {
    e.preventDefault();
    ai.post(url, {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_no: parseInt(data.phone_no),
      password: data.password,
      type_choice: data.type_choice,
    }).then((res) => {
      console.log(res.data);
      setData({
        first_name: "",
        last_name: "",
        email: "",
        phone_no: "",
        password: "",
        type_choice: "",
      });
      //props.showAlert("Your problem has been sumbitted!", "success");
      alert("nnnnnnnnnnnn");
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
          <input
            type="text"
            className="FormField__Input"
            id="first_name"
            placeholder="First Name *"
            name="first_name"
            value={data.first_name}
            onChange={(e) => handle(e)}
            required
          />
        </div>
        <div className="FormField">
          <input
            type="text"
            className="FormField__Input"
            id="last_name"
            placeholder="Last Name *"
            name="last_name"
            value={data.last_name}
            onChange={(e) => handle(e)}
            required
          />
        </div>
        <div className="FormField">
          <input
            type="email"
            className="FormField__Input"
            id="email"
            placeholder="E-mail *"
            name="email"
            value={data.email}
            onChange={(e) => handle(e)}
            required
          />
        </div>
        <div className="FormField">
          <input
            type="number"
            className="FormField__Input"
            id="phone_no"
            placeholder="phone Number *"
            name="phone_no"
            value={data.phone_no}
            onChange={(e) => handle(e)}
            required
          />
        </div>

        <div className="FormField">
          <input
            type="Password"
            className="FormField__Input"
            id="password"
            placeholder="Password *"
            name="password"
            value={data.password}
            onChange={(e) => handle(e)}
            required
          />
        </div>
        {/*
        <div className="FormField">
          <input
            type="text"
            className="FormField__Input"
            id="type_choice"
            placeholder="type_choice *"
            name="type_choice"
            value={data.type_choice}
            onChange={(e) => handle(e)}
            required
          />
        </div>
        */}

        <div className="FormField">
          <label className="FormField__Label">Select type of user </label>
          <select onChange={(e) => handle(e)}>
            <option value={`"photographer"{data.type_choice}`}>
              As a photographer
            </option>
            <option value={`"customer"{data.type_choice}`}>
              As a customer
            </option>
          </select>
        </div>

        <div className="FormField">
          <button className=" Submit FormField__Button mr-20" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
