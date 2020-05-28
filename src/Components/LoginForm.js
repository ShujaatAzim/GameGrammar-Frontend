import React from 'react'
import { Form, Button } from 'react-bootstrap'
import '../Styles/App.css'

const LoginForm = props => {

  return (
    <div className="under-jumbo-half">
      <h3>Please Log In Below!</h3>
      <p>New user? <button onClick={() => props.swapStatus("register")}>Sign Up!</button></p>
      <br />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default LoginForm