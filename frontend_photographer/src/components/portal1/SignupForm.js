import React from "react";
function SignupForm(props) {
  return (
    <div className="FormCenter">
      <form className="FormFeilds">
        <div className="FormField">
          {/* <label className="FormField__Label" htmlfor="Name">
            First Name
  </label> */}
          <input
            type="text"
            className="FormField__Input"
            id="First Name"
            placeholder="First Name"
            name="First Name"
          />
        </div>
        <div className="FormField">
          <input
            type="text"
            className="FormField__Input"
            id="Last Name"
            placeholder="Last Name"
            name="Last Name"
          />
        </div>
        <div className="FormField">
          <input
            type="email"
            className="FormField__Input"
            id="email"
            placeholder="E-mail"
            name="email"
          />
        </div>
        <div className="FormField">
          <input
            type="number"
            className="FormField__Input"
            id="phone"
            placeholder="phone Number"
            name="phone"
          />
        </div>

        <div className="FormField">
          <input
            type="Password"
            className="FormField__Input"
            id="Password"
            placeholder="Password"
            name="Password"
          />
        </div>
        <div className="FormField">
          <label className="FormField__Label">Select type of user </label>
          <select>
            <option></option>
            <option>As a photographer</option>
            <option>As a customer</option>
          </select>
        </div>

        <div className="FormField">
          <button className="FormField__Button mr-20" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
