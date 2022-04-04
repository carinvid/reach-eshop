import React, { useState } from "react";
import './Login.css'
import StorefrontIcon from '@material-ui/icons/Storefront';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <Link to= '/' style={{ texDecoration : "none"}}>
            <div className="login-logo">
                <StorefrontIcon className="login=logoImage" fontSize="large"/>
                <h2 className="login-logoTitle">eShop</h2>
            </div>
            </Link>

            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" className="login-signInButton">Sign In</button>
                    <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button className='login__registerButton' onClick={register}>Create your eShop Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;