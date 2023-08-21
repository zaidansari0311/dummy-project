import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./ChangePassword.css";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [newpassword1, setnewPassword1] = useState();
  const [newpassword2, setnewPassword2] = useState();
  const [newpasswordError1, setnewPasswordError1] = useState();
  const [newpasswordError2, setnewPasswordError2] = useState();
  const [passwordError, setpasswordError] = useState();

  const PasswordRegEx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    let password = e.target[0].value;
    if (!PasswordRegEx.test(password)) {
      setpasswordError("Enter valid password!");
    } else {
      setpasswordError("");
    }

    let newpassword1 = e.target[1].value;
    if (!PasswordRegEx.test(newpassword1)) {
      setnewPasswordError1("Enter valid password!");
    } else if (newpassword1.match(password)) {
      setnewPasswordError1("Enter new password!");
    } else {
      setnewPasswordError1("");
    }

    let newpassword2 = e.target[2].value;
    if (!PasswordRegEx.test(newpassword2)) {
      setnewPasswordError2("Enter valid password!");
    } else if (!newpassword2.match(newpassword1)) {
      setnewPasswordError2("Enter same password!");
    } else {
      setnewPasswordError2("");
    }

    if (
      PasswordRegEx.test(password) &&
      PasswordRegEx.test(newpassword1) &&
      PasswordRegEx.test(newpassword2) &&
      !newpassword1.match(password) &&
      newpassword2.match(newpassword1)
    ) {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="d-flex flex-row">
        <div className="d-grid col-2">
          <div className="d-flex flex-column my-2">
            <Link className="Link" as={Link} to="/dashboard">
              Home
            </Link>
            <Link className="C_Link" as={Link} to="/editProfile">
              Edit Profile
            </Link>
            <Link className="C_Link" as={Link} to="/changePassword">
              Change Password
            </Link>
            <Link className="Link" as={Link} to="/table">
              List
            </Link>
            <Link className="Link" as={Link} to="/personaldetail">
              Personal Info
            </Link>
            <Link className="Link" as={Link} to="/orderList">
              Order List
            </Link>
            <Link className="Link" as={Link} to="/cards">
              Cards
            </Link>
            <Link className="Link" as={Link} to="/">
              Logout
            </Link>
          </div>
        </div>
        <div className="d-grid col-10 C_dashBoard">
          <div className="container2">
            <div className="d-flex justify-content-center">
              <h2 className="pt-2">Change Password</h2>
            </div>
            <hr />

            <Form className="mt-3 scrollbar" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <b>Current Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  // onChange={handlepassword}
                  required
                />
                {
                  <span style={{ color: "red", border: "red" }}>
                    {passwordError}
                  </span>
                }
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <b>New Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="newpassword1"
                  placeholder="Password"
                  value={newpassword1}
                  // onChange={handlenewpassword1}
                  required
                />
                {
                  <span style={{ color: "red", border: "red" }}>
                    {newpasswordError1}
                  </span>
                }
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>
                  <b>Confirm New Password</b>
                </Form.Label>
                <Form.Control
                  type="password"
                  name="newpassword2"
                  placeholder="Password"
                  value={newpassword2}
                  // onChange={handlenewpassword2}
                  required
                />
                {
                  <span style={{ color: "red", border: "red" }}>
                    {newpasswordError2}
                  </span>
                }
              </Form.Group>
              <div className="text-center">
                <Button variant="success" type="submit" className="btn mb-2">
                  Save
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
