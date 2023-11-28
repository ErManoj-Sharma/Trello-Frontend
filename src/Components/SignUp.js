import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Your form submission logic goes here
    console.log("Form submitted successfully");
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="user_email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            autoFocus
            required
          />
        </Form.Group>

        <Form.Group controlId="user_password">
          <Form.Label>Password</Form.Label>
          <Form.Text className="text-muted">(6 characters minimum)</Form.Text>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />
        </Form.Group>

        <Form.Group controlId="user_password_confirmation">
          <Form.Label>Password confirmation</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="new-password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
