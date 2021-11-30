import React, { Component, useState} from "react";
import { Redirect } from 'react-router';
import axios from "axios";
import ai from "../Apis";

// function LoginForm(props) {
//   const url = "account/login/";
//   const [data, setData] = useState({
//    email: "",
//     password: "",
//   });
//   const { setLogin } = props; 
//   function sumbit(e) {
//     e.preventDefault();
//     ai.post(url, {
//       email: data.email,
//       password: data.password,
//     }).then((res) => {
//       console.log(res.data);
//       setData({
//         email: "",
//         password: "",
//       });
//       props.showAlert("Your problem has been sumbitted!", "success");
//       //alert("nnnnnnnnnnnn");
//     });
//   }
//   function handle(e) {
//     const newdata = { ...data };
//     newdata[e.target.id] = e.target.value;
//     setData(newdata);
//     console.log(newdata);
//   }

// //my changes

 export default class LoginForm extends Component {
  constructor(props){
      super(props)
      let loggedIn=false
      this.state = {
          email:"",
          password:"",

      }
      this.onChange = this.onChange.bind(this)
      this.sumbitForm = this.onChange.bind(this)
  }

  onChange(e){
      this.setState({
          [e.target.name]:e.target.value
      })
  }

submitForm(e){
   e.preventDefault()
   const {email, password} = this.state
  if(email === "ahmadfaizan687@gmail.com" && password === "Faizan123")
  {
      this.setState({
          loggedIn:true
      })
  }
  
  }

render() {
  if(this.state.loggedIn){
      return <Redirect to="/Main" />
  }
  return (
    <div className="FormCenter">
    <form className="FormFeilds" onSubmit={this.submitForm} >
      {/* email input */}
      <div className="FormField">
        <input
          type="email"
          className="FormField__Input"
          id="email"
          placeholder="E-mail"
          name="email"
          value={this.state.email} 
          onChange={this.onChange}
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
          value={this.state.password} 
          onChange={this.onChange}
        />
      </div>

      <div className="FormField">
        <button className="FormField__Button mr-20" type="Submit" >
          Log In
        </button><br />
        <p className="FormField__link">
          Create an Account
        </p>
      </div>
    </form>
  </div>
  );
}
}




//   return (
//     <div className="FormCenter">
//       <form className="FormFeilds" onSubmit={(e) => sumbit(e)} >
//         {/* email input */}
//         <div className="FormField">
//           <input
//             type="email"
//             className="FormField__Input"
//             id="email"
//             placeholder="E-mail"
//             name="email"
//             onChange={(e) => handle(e)}
//             value={data.email}
//           />
//         </div>
//         {/* password input */}
//         <div className="FormField">
//           <input
//             type="password"
//             className="FormField__Input"
//             id="password"
//             placeholder="password"
//             name="password"
//             onChange={(e) => handle(e)}
//             value={data.password}
//           />
//         </div>

//         <div className="FormField">
//           <button className="FormField__Button mr-20" type="Submit" >
//             Log In
//           </button><br />
//           <p onClick={() => setLogin("signup")} className="FormField__link">
//             Create an Account
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// }}
