import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setemailError] = useState();
  const [passwordError, setpasswordError] = useState();

  const EmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const PasswordRegEx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target[0].value;
    if (EmailRegex.test(email)) {
      setemailError("");
    } else {
      setemailError("Invalid email");
    }

    let password = e.target[1].value;
    if (PasswordRegEx.test(password)) {
      setpasswordError("");
    } else {
      setpasswordError(
        "password should contain atleast one number and one special character and between 8-10 digits"
      );
    }
    if (EmailRegex.test(email) && PasswordRegEx.test(password)) {
      navigate("/dashboard");
    }
  };

  const navigate = useNavigate();
  return (
    <div className="container d-grid col-lg-12 col-sm-12 col-md-12">
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-center">
          <h2 className="pt-2">Sign In</h2>
        </div>
        <hr />
        <Form className="mt-3 d-grid col-12 " onSubmit={handleSubmit}>
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
            <span style={{ color: "red", fontSize: "15px" }}>{emailError}</span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              <b>Password</b>
            </Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
            />
            <span style={{ color: "red", fontSize: "15px" }}>
              {passwordError}
            </span>
          </Form.Group>
          <Button variant="primary" type="submit" className="btn mb-2">
            Submit
          </Button>
          <div className="links">
            <Link style={{ color: "black" }} as={Link} to="/forgot">
              Forgot Password?
            </Link>
            <br />
            <Link style={{ color: "black" }} as={Link} to="/register">
              Register Yourself
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
