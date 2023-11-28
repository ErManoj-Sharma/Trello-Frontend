import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [validated, setValidated] = useState(false);

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handlesubmit = (event) => {
    const form = event.currentTarget;
    if (!validateEmail(email)) {
      setIsValidEmail(false);
      return;
    }
    debugger;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (!form.checkValidity()) {
      return;
    }

    setIsValidEmail(true);

    setPasswordsMatch(true);
    debugger;
    // Your form submission logic goes here
    console.log("Form submitted successfully");
  };

  return (
    <div className="container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Control.Feedback type="invalid">
            Please Enter Valid Email{" "}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(event) => handlesubmit(event)}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;
