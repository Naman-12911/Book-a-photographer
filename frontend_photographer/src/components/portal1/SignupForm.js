import React, { useState } from "react";
import ai from "../Apis";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

function SignupForm(props) {
  // signup api
  const url = "account/register/";
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    password: "",
    user_type: "",
  });
  // check the phone number is correct or not
  function sumbit(e) {
    e.preventDefault();
    const regexp = /^[0-9\b]+$/;
    if (data.phone_no.length !== 10 || !regexp.test(data.phone_no)) {
      alert("please correct phone numer");
      return;
    }
    ai.post(url, {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone_no: parseInt(data.phone_no),
      password: data.password,
      user_type: data.user_type,
    }).then((res) => {
      console.log(res.data);
      setData({
        first_name: "",
        last_name: "",
        email: "",
        phone_no: "",
        password: "",
        user_type: "",
      });
      //props.showAlert("Your problem has been sumbitted!", "success");
      alert("you are signup!");
    });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  const handleChange = (event) => {
    setData({ ...data, user_type: event.target.value });
  };

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
            type="text"
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

        <FormLabel component="legend">User Type</FormLabel>
        <RadioGroup
          aria-label="type_choice"
          name="type_choice"
          value={data.type_choice}
          onChange={handleChange}
        >
          <FormControlLabel
            value="customer"
            control={<Radio />}
            label="Customer"
          />
          <FormControlLabel
            value="photographerr"
            control={<Radio />}
            label="Photographer"
          />
        </RadioGroup>

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
