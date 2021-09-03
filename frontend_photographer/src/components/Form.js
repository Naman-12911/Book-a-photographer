import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './Form.css';
import photo3 from "./image/photo3.jpg";

 function Form(){
	
    return (
		<Router>
		<div className='App'>
		    <div className='App__Aside'>
				{/* <img src={photo3} alt="photo" /> */}
				<h1>hello</h1>
		    </div>
		<div className='App__Form'>
			<div className='PageSwitcher'>
				<NavLink to="/LogIn" activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item' >Log In</NavLink>
				<NavLink exact to="/SignUp" activeClassName='PageSwitcher__Item--Active' className='PageSwitcher__Item ' >Sign Up</NavLink>
			</div>
			<div className='FormTitle'>
			<NavLink to="/LogIn" activeClassName='FormTitle__Link--Active' className='FormTitle__Link'>Log In</NavLink> or <NavLink exact to="/SignUp" activeClassName='FormTitle__Link--Active' className='FormTitle__Link '>Sign Up</NavLink>

			</div>
			<Route exact path="/SignUp" component={SignupForm}>
		    </Route>
			<Route path="/LogIn" component={LoginForm}>
			</Route>
				
		</div>
	    </div>
		
		</Router>
          
    );
}

export default Form;