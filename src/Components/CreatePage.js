import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Persons from "./Persons";
function CreatePage() {
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  let phoneRegEx =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  let passportRegEx = /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/gm;
  let nameRegEx = /^[a-zA-Z]{3,10}$/;
  let heightRegEx = /^[0-9]{1,3}$/;

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

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passportError, setPassportError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = formValidate();

    if (isValid) {
      setFirstName("");
      setLastName("");
      setHeight("");
      setWeight("");
      setDateOfBirth("");
      setGender("");
      setEmail("");
      setPhoneNumber("");
      setPassport("");
      Persons.push({
        FirstName: firstName,
        LastName: lastName,
        Gender: gender,
        Height: height,
        Weight: weight,
        DOB: dateOfBirth,
        Email: email,
        PhoneNumber: phoneNumber,
        Passport: passport,
        id: new Date().getTime().toString(),
      });
      navigate("/cards");
    }
  };

  const formValidate = () => {
    let isValid = true;

    if (nameRegEx.test(firstName)) {
      setFirstNameError("");
    } else {
      isValid = false;
      setFirstNameError("Enter first properly");
    }

    if (nameRegEx.test(lastName)) {
      setLastNameError("");
    } else {
      isValid = false;
      setLastNameError("Enter last properly");
    }

    if (heightRegEx.test(height)) {
      setHeightError("");
    } else {
      isValid = false;
      setHeightError("Enter height properly");
    }

    if (emailRegex.test(email)) {
      setEmailError("");
    } else {
      isValid = false;
      setEmailError("Enter email properly");
    }

    if (heightRegEx.test(weight)) {
      setWeightError("");
    } else {
      isValid = false;
      setWeightError("Enter weight properly");
    }

    if (phoneRegEx.test(phoneNumber)) {
      setPhoneNumberError("");
    } else {
      isValid = false;
      setPhoneNumberError("Enter valid phone number");
    }

    if (!gender.match("Select")) {
      setGenderError("");
    } else {
      isValid = false;
      setGenderError("Select gender");
    }

    // console.log('today:',new Date().getTime());
    // console.log('birthday:',new Date(dateOfBirth).getTime());
    // console.log(new Date().getTime()>new Date(dateOfBirth).getTime());
    // var old = new Date(dateOfBirth).getTime();
    // var today = new Date().getTime();

    if (new Date().getTime() > new Date(dateOfBirth).getTime()) {
      setDateOfBirthError("");
    } else {
      isValid = false;
      setDateOfBirthError("Enter valid D.O.B");
    }

    if (passportRegEx.test(passport)) {
      setPassportError("");
    } else {
      isValid = false;
      setPassportError("Invalid Passport no.");
    }

    return isValid;
  };

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
            <h2 className="pt-0">Create Dependents</h2>
          </div>
          <hr />
          <div className="mt-3 d-flex flex-column">
            <Form onSubmit={handleSubmit}>
              <div className="d-flex flex-row">
                <div className="d-grid col-4 mx-4">
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>First Name</b>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        // value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter first name"
                        className="newInput"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {firstNameError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Height &#40;cms&#41;</b>
                      </Form.Label>
                      <Form.Control
                        required
                        className="newInput_EP"
                        placeholder="Enter your height"
                        aria-label="Default select example"
                        // value={height}
                        onChange={(e) => setHeight(e.target.value)}
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {heightError}
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Email address</b>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        // value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        className="newInput"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {emailError}
                      </span>
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
                        required
                        type="text"
                        // value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter last name"
                        className="newInput"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {lastNameError}
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Weight &#40;kg&#41;</b>
                      </Form.Label>
                      <Form.Control
                        required
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                        className="newInput_EP"
                        placeholder="Enter your weight"
                        aria-label="Default select example"
                        // value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {weightError}
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Phone Number</b>
                      </Form.Label>
                      <Form.Control
                        className="newInput_EP"
                        required
                        type="text"
                        // value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter phone number"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {phoneNumberError}
                      </span>
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
                        required
                        className="newInput_EP"
                        // value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option>--Select--</option>
                        <option>Male</option>
                        <option>Female</option>
                      </Form.Select>
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {genderError}
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Date of Birth</b>
                      </Form.Label>
                      <Form.Control
                        required
                        placeholder="D.O.B"
                        // value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        className="newInput_EP"
                        type="date"
                        // onChange={(e) => handleAgeChange(e)}
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {dateOfBirthError}
                      </span>
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Passport Number</b>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={passport}
                        onChange={(e) => setPassport(e.target.value)}
                        placeholder="Enter passport number"
                        className="newInput_EP"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {passportError}
                      </span>
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button variant="success" type="submit" className="btn m-2">
                  Submit
                </Button>
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

export default CreatePage;
