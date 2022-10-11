import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";

function Login() {
    return (
        // Login = amazonImage + logIn Container
        <div className='login'>
            {/* 1. amazonImage */}
            <Link to='/'>
                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
                {/* 2. LogIn Container: Signin + form + acknowledge + createAccountButton */}
            </Link>
            <div className='login__container'>
                {/* 1. SignInHead */}
                <h1>Sign-In</h1>
                {/* 2. form = firstInput + secondInput + signIn Button */}
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />
                    <h5>password</h5>
                    <input type="password" />
                    <button className='login_signInButton'>Sign In</button>
                </form>
                {/* 3. acknowledgement */}
                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                {/* 4. create Account Button */}
                <button className='login__registerButton'>Create Account</button>
            </div>
        </div >
    )
}

export default Login