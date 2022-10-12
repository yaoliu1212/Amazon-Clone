import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
// import { useState } from './StateProvider'
import { auth } from "./firebase";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();//prevent refresh the page
        //firebase login
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                // console.log(auth);
                history('/');
            })

            .catch(error => alert("error from signIn " + error.message))
    }

    const register = (e) => {
        e.preventDefault();
        //firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history('/')
                }
            })
            .catch(error => alert("error from register " + error.message))
    }
    return (
        // Login = amazonImage + logIn Container
        <div className='login'>
            {/* 1. amazonImage */}
            <Link to='/'>
                <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt='' />
                {/* 2. LogIn Container: Signin + form + acknowledge + createAccountButton */}
            </Link>
            <div className='login__container'>
                {/* 1. SignInHead */}
                <h1>Sign-In</h1>
                {/* 2. form = firstInput + secondInput + signIn Button */}
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='login_signInButton' type='submit' onClick={signIn}>Sign In</button>
                </form>
                {/* 3. acknowledgement */}
                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                {/* 4. create Account Button */}
                <button className='login__registerButton' onClick={register}>Create Account</button>
            </div>
        </div >
    )
}

export default Login