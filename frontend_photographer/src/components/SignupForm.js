import React, {Component} from 'react'
import {  Link } from "react-router-dom";
function SignupForm (){
	
    return (
        <div className='FormCenter' >
				<form className='FormFeilds' >
					<div className='FormField'>
						<label className='FormField__Label' htmlfor='Name'>First Name</label>
						<input type="text" className="FormField__Input" id="First Name" placeholder='First Name' name='First Name' />
					</div>
					<div className='FormField'>
					    <label className='FormField__Label' >Last Name</label>
						<input type="text" className="FormField__Input" id="Last Name" placeholder='Last Name' name='Last Name' />
					</div>
					<div className='FormField'>
					    <label className='FormField__Label' >E-mail</label>
						<input type="text" className="FormField__Input" id="E-mail" placeholder='E-mail' name='E-mail' />
					</div>
					
					<div className='FormField'>
					    <label className='FormField__Label' >Password</label>
						<input type="Password" className="FormField__Input" id="Password" placeholder='Password' name='Password' />
					</div>
					<div className='FormField'>
					<label className='Form__CheckboxLabel'>
						<h6>CHOOSE A TYPE</h6>
						<input type="checkbox" className='Form__Checkbox'>AS A PHOTOGRAPHER</input> <br />
						<input type="checkbox" className='Form__Checkbox' >AS A CUSTOMER</input>
 				    </label>
					</div>

					<div className='FormField'>
					    <button className='FormField__Button mr-20' >Sign Up</button>
						<Link to="/LogIn" className='FormField__Link'>I am Already Register</Link>
					</div>
					</form>
				</div>
    )
}

export default SignupForm;
