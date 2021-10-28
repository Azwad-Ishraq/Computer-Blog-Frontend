import React from 'react';
import './Login.css'
import google from '../../google.png'
const Login = () => {
    return (
        <div className='login'>
            <h1>Please <span>Login</span></h1>

            <form>
                <input className='login-input' type="text" placeholder="Enter Your Email"/>
                <input className='login-input' type="text" placeholder="Enter Your Password"/>
               <span>
               <button type='submit'>Login</button>
                <img className='google-btn' src={google} alt=""/> 
               </span>
            </form>
        </div>
    );
};

export default Login;