import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Persons from "./Persons";
function ViewPage() {
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  let phoneRegEx =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  let passportRegEx = /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/gm;

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [passport, setPassport] = useState("");
  const [id, setId] = useState("");

  var index = Persons.map(function (e) {
    return e.id;
  }).indexOf(id);

  useEffect(() => {
    setFirstName(localStorage.getItem("FirstName"));
    setLastName(localStorage.getItem("LastName"));
    setGender(localStorage.getItem("Gender"));
    setHeight(localStorage.getItem("Height"));
    setWeight(localStorage.getItem("Weight"));
    setDateOfBirth(localStorage.getItem("DateOfBirth"));
    setPassport(localStorage.getItem("Passport"));
    setPhoneNumber(localStorage.getItem("PhoneNumber"));
    setEmail(localStorage.getItem("Email"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <div className="d-flex flex-row">
      <div className="d-grid col-2">
        <div className="d-flex flex-column my-2">
          <Link className="Link" as={Link} to="/dashboard">
            Home
          </Link>
          <Link className="Link" as={Link} to="/editProfile">
            Edit Profile
          </Link>
          <Link className="Link" as={Link} to="/changePassword">
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
        <div className="containers_EP">
          <div className="d-flex justify-content-center">
            <h2 className="pt-0">View Dependents</h2>
          </div>
          <hr />
          <div className="mt-3 d-flex flex-column">
            <Form>
              <div className="d-flex flex-row">
                <div className="d-grid col-4 mx-4">
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>First Name</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        type="text"
                        value={firstName}
                        placeholder="Enter first name"
                        className="newInput"
                      />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Height &#40;cms&#41;</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        className="newInput_EP"
                        placeholder="Enter your height"
                        aria-label="Default select example"
                        value={height}
                      />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Email address</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        type="text"
                        value={email}
                        placeholder="Enter email"
                        className="newInput"
                      />
                    </Form.Group>
                  </div>
                </div>

                <div className="d-grid col-4 mx-4">
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Last Name</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        type="text"
                        value={lastName}
                        placeholder="Enter last name"
                        className="newInput"
                      />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Weight &#40;kg&#41;</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        className="newInput_EP"
                        placeholder="Enter your weight"
                        aria-label="Default select example"
                        value={weight}
                      />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Phone Number</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        className="newInput_EP"
                        type="text"
                        value={phoneNumber}
                        placeholder="Enter phone number"
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="d-grid col-4">
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Gender</b>
                      </Form.Label>
                      <Form.Select
                        disabled
                        className="newInput_EP"
                        value={gender}
                      >
                        <option>--Select--</option>
                        <option>Male</option>
                        <option>Female</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Date of Birth</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        placeholder="D.O.B"
                        value={dateOfBirth}
                        className="newInput_EP"
                        type="date"
                      />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Passport Number</b>
                      </Form.Label>
                      <Form.Control
                        disabled
                        type="text"
                        value={passport}
                        placeholder="Enter passport number"
                        className="newInput_EP"
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button
                  onClick={() => navigate(-1)}
                  variant="danger"
                  className="btn m-2"
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewPage;
