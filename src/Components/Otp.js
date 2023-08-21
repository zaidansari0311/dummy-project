import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Otp.css";
import { useNavigate } from "react-router";

export default function Otp() {
  const [Otp, setOtp] = useState();
  const [OtpError, setOtpError] = useState();
  const navigate = useNavigate();
  let OtpRegEx = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    let Otp = e.target[0].value;
    if (OtpRegEx.test(OtpRegEx)) {
      setOtpError("");
    } else {
      setOtpError("Enter valid Otp");
    }

    if (OtpRegEx.test(Otp)) {
      navigate("/");
    }
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center flex-column">
        <h2 className="pt-2">Otp Verification</h2>
        <p>Enter OTP to get password</p>
      </div>
      <hr />
      <Form className="mt-3" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Enter Otp :</b>
          </Form.Label>
          <Form.Control
            required
            type="text"
            value={Otp}
            placeholder="Enter otp"
          />
          {OtpError ? <span style={{ color: "red" }}>{OtpError}</span> : ""}
        </Form.Group>

        <Button variant="primary" type="submit" className="btn mb-2">
          Verify
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
