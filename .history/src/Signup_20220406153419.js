import React, { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap'

export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();


  return (
    <>
    <Card className="navbar navbar-expand-lg navbar-light fixed-top">
        <Card.Body className="w-50">
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form >
                    <Form.Group id= 'email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required ></Form.Control>
                    </Form.Group> 
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required ></Form.Control>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required ></Form.Control>
                    </Form.Group>
                    <Button className="w-50" type="submit">Sign Up</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className="w-50 text-center mt-2">
        Already have an account? Log In
    </div>
    </>
  )
}
