import React, {Component} from 'react'
import {Link } from "react-router-dom";

function LoginForm (){
	
    return ( 
        <div className='FormCenter'>
            <form className='FormFeilds' >
                <div className='FormField'>
                    <label className='FormField__Label' >E-mail</label>
				    <input type="text" className="FormField__Input" id="E-mail" placeholder='E-mail' name='E-mail' />
                </div>
				<div className='FormField'>
					    <label className='FormField__Label' >Password</label>
						<input type="Password" className="FormField__Input" id="Password" placeholder='Password' name='Password' />
				</div>
				
				<div className='FormField'>
					<button className='FormField__Button mr-20' >Log In</button>
                    <Link to='/SignupForm' className='FormField__link'>Create an Account</Link>
				</div>

            </form>
        </div>						
           
    );
}


export default LoginForm;