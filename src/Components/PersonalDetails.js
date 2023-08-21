import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link, useNavigate } from "react-router-dom";
import "./EditProfile.css";
import "react-calendar/dist/Calendar.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function PersonalDetails() {
  let aadharRegEx = /^[2-9]{1}[0-9]{3}s{1}[0-9]{4}s{1}[0-9]{4}$/;
  let passportRegEx = /^[A-PR-WY][1-9]ds?d{4}[1-9]$/;
  let nameRegEx = /^[a-zA-Z]{3,10}$/;
  let heightRegEx = /^[0-9]{1,3}$/;

  const [aadharNumber, setAadharNumber] = useState();
  const [aadharName, setAadharName] = useState();
  const [passportNumber, setPassportNumber] = useState();
  const [passportDate, setPassportDate] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [age, setAge] = useState();
  const [maritalStatus, setMaritalStatus] = useState();
  const [children, setChildren] = useState();
  const [religion, setReligion] = useState();

  const [aadharNumberError, setAadharNumberError] = useState();
  const [aadharNameError, setAadharNameError] = useState();
  const [passportNumberError, setPassportNumberError] = useState();
  const [passportDateError, setPassportDateError] = useState();
  const [dateOfBirthError, setDateOfBirthError] = useState();
  const [ageError, setAgeError] = useState();
  const [maritalStatusError, setMaritalStatusError] = useState();
  const [childrenError, setChildrenError] = useState();
  const [religionError, setReligionError] = useState();

  // const navigate = useNavigate();

  const handleAgeChange = (e) => {
    let dateOfBirth = e.target.value;
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthDate;
    const ageInYears = Math.floor(ageInMilliseconds / 31536000000);
    setAge(ageInYears);
    // console.log("value:",ageInYears);
  };

  const handleMstatusChange = (e) => {
    console.log("value:", e.target.value);
    console.log(children);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let aadharNumber = e.target[0].value;
    if (aadharRegEx.test(aadharNumber)) {
      setAadharNumberError("");
    } else {
      setAadharNumberError("Invalid Aadhar no.");
    }

    let aadharName = e.target[5].value;
    if (nameRegEx.test(aadharName)) {
      setAadharNameError("");
    } else {
      setAadharNameError("Invalid name");
    }

    let passportNumber = e.target[1].value;
    if (passportRegEx.test(passportNumber)) {
      setPassportNumberError("");
    } else {
      setPassportNumberError("Invalid Passport no.");
    }

    let passportDate = e.target[6].value;
    if (!passportDate === "") {
      setPassportDateError("");
    } else {
      setPassportDateError("Enter exp. date");
    }

    let dateOfBirth = e.target[2].value;
    if (!dateOfBirth === "") {
      setDateOfBirthError("");
    } else {
      setDateOfBirthError("Enter D.O.B");
    }

    let age = e.target[7].value;
    if (heightRegEx.test(age)) {
      setAgeError("");
    } else {
      setAgeError("Select from D.O.B");
    }

    let maritalStatus = e.target[3].value;
    if (!maritalStatus.match("Select")) {
      setMaritalStatusError("");
    } else {
      setMaritalStatusError("Choose from here");
    }

    let children = e.target[4].value;
    if (!children.match("Select")) {
      setChildrenError("");
    } else {
      setChildrenError("Choose from here");
    }

    let religion = e.target[8].value;
    if (nameRegEx.test(religion)) {
      setReligionError("");
    } else {
      setReligionError("Enter religion");
    }
  };

  return (
    <div className="d-flex flex-row  dash">
      <div className="d-grid col-2 dash-1">
        <div className="d-flex flex-column my-2 dash-11">
          <Link className="Link" as={Link} to="/dashboard">
            Home
          </Link>
          <Link className="E_Link" as={Link} to="/editProfile">
            Edit Profile
          </Link>
          <Link className="E_Link" as={Link} to="/changePassword">
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
      <div className="d-grid col-10 E_dashBoard dash-2">
        <div className="containers_EP dash-21">
          <div className="d-flex justify-content-center dash-211">
            <h2 className="pt-0">Personal Information</h2>
          </div>
          <hr />
          <div className="mt-3 d-flex flex-column">
            <Form onSubmit={handleSubmit}>
              <div className="d-flex flex-row">
                <div className="d-grid col-6 mx-4">
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Aadhar Number</b>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={aadharNumber}
                        placeholder="Enter aadhar number"
                        className="newInput_EP"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {aadharNumberError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Passport Number</b>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={passportNumber}
                        placeholder="Enter passport number"
                        className="newInput_EP"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {passportNumberError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Date of Birth</b>
                      </Form.Label>
                      <Form.Control
                        required
                        placeholder="D.O.B"
                        value={dateOfBirth}
                        className="newInput_EP"
                        type="date"
                        onChange={(e) => handleAgeChange(e)}
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {dateOfBirthError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Marital Status</b>
                      </Form.Label>
                      <Form.Select
                        required
                        className="newInput_EP"
                        aria-label="Default select example"
                        onChange={(e) => handleMstatusChange(e)}
                      >
                        <option>--Select--</option>
                        <option value={maritalStatus}>Married</option>
                        <option value={maritalStatus}>Single</option>
                      </Form.Select>
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {maritalStatusError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Children</b>
                      </Form.Label>
                      <Form.Select
                        required
                        className="newInput_EP"
                        aria-label="Default select example"
                      >
                        <option value={children}>--Select--</option>
                        <option value={children}>0</option>
                        <option value={children}>1</option>
                        <option value={children}>2</option>
                        <option value={children}>3</option>
                      </Form.Select>
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {childrenError}
                      </span>
                    </Form.Group>
                  </div>
                </div>

                <div className="d-grid col-6 mx-4">
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Name as per Aadhar</b>
                      </Form.Label>
                      <Form.Control
                        required
                        placeholder="Full Name"
                        value={aadharName}
                        className="newInput_EP"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {aadharNameError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Expiry Date of Passport</b>
                      </Form.Label>
                      <Form.Control
                        required
                        placeholder="date"
                        value={passportDate}
                        className="newInput_EP"
                        type="date"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {passportDateError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Age</b>
                      </Form.Label>
                      <Form.Control
                        required
                        placeholder="Age"
                        value={age}
                        className="newInput_EP"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {ageError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Religion</b>
                      </Form.Label>
                      <Form.Control
                        required
                        className="newInput_EP"
                        type="text"
                        value={religion}
                        placeholder="Enter religion"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {religionError}
                      </span>
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button variant="success" type="submit" className="btn m-2">
                  Submit
                </Button>
                <Button variant="danger" className="btn m-2">
                  <Link
                    as={Link}
                    to="/dashboard"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Cancel
                  </Link>
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
