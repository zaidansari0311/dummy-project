import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import { useNavigate } from "react-router";

export default function ForgotPassword() {
  const [email, setEmail] = useState();
  const [emailError, setemailError] = useState();
  const navigate = useNavigate();

  const EmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    if (EmailRegex.test(email)) {
      setemailError("");
    } else {
      setemailError("Enter valid email");
    }

    if (EmailRegex.test(email)) {
      navigate("/otp");
    }
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center flex-column">
        <h2 className="pt-2">Forgot Password ?</h2>
        <p>Enter your Email to get OTP</p>
      </div>
      <hr />
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Email address</b>
          </Form.Label>
          <Form.Control
            required
            type="text"
            value={email}
            placeholder="Enter email"
          />
          {emailError ? <span style={{ color: "red" }}>{emailError}</span> : ""}
        </Form.Group>

        <Button variant="primary" type="submit" className="btn mb-2">
          Send E-mail
        </Button>
        <p>
          Remember your Password?{" "}
          <Link as={Link} to="/">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
}
