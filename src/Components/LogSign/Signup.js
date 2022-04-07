import React, { useRef } from 'react';
import './Signup.css'
import { Link } from "react-router-dom";
import StorefrontIcon from '@material-ui/icons/Storefront';
import { useAuth } from './context/AuthContext';

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()

        signup(emailRef.current.value, passwordRef.current.value)
    }


  return (
    <>
    <div className="signup">
    <Link to= '/' style={{ texDecoration : "none"}}>
            <div className="login-logo">
                <StorefrontIcon className="login=logoImage" fontSize="large"/>
                <h2 className="login-logoTitle">eShop</h2>
            </div>
            </Link>
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form >
                        <h5>Email</h5>
                        <input type="email" ref={emailRef} required />
                        <h5>Password</h5>
                        
                        <input type="password" ref={passwordRef} required />
                    
                    
                        <h5>Password Confirmation</h5>
                        <input type="password" ref={passwordConfirmRef} required />
                    
                    <button type="submit" className="signup-signupButton">Sign Up</button>
            </form>
        </div>
        <p>Already have an account? Log In</p>
    </div>
    

    
    </>
  )
}
