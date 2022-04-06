import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap'

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();


  return (
    <>
    <div className="signup">
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form >
                        <h5>Email</h5>
                        <input type="email" ref={emailRef} required />
                        <h5>Password</h5>
                        
                        <input type="password" ref={passwordRef} required />
                    
                    
                        <h5>Password Confirmation</h5>
                        <input type="password" ref={passwordConfirmRef} required />
                    
                    <button type="submit">Sign Up</button>
            </form>
        </div>
    </div>

    <div className="goToLogin">
        Already have an account? Log In
    </div>
    </>
  )
}
