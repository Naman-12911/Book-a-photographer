import React, { useState} from "react";
import {useHistory } from 'react-router';
import ai from "../Apis";
import {useLocalStorage} from "../../Hooks/useLocalStorage"

function LoginForm(props) {
  const history = useHistory();
  const url = "account/login/";
  const[Token] = useLocalStorage("token")
  // const [token] = useLocalStorage('token')
console.log(Token)
  const [data, setData] = useState({
   email: "",
  });
  const { setLogin ,authInfo, setauthInfo} = props; 
  function sumbit(e) {
    e.preventDefault();
    ai.post(url, {
      email: data.email,
      password: data.password,
    }).then((res) => {
      console.log(res.data);
      setauthInfo({...authInfo, loggedIn:true})
      localStorage.setItem("token",res.data.tokens.access)
      alert("You are login  has!, been sumbitted!", "success");
      console.log(Token)
      history.push("/")
    }).catch(
      e=>{console.log(e.response.data)
      alert(e.response.data.detail)}
      // error msg
    
    )
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }


  return (
    <div className="FormCenter">
      <form className="FormFeilds" onSubmit={(e) => sumbit(e)} >
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
          <button className="FormField__Button mr-20" type="Submit" >
            Log In
          </button><br />
          <p onClick={() => setLogin("signup")} className="FormField__link">
            Create an Account
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm