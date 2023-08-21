import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Persons from "./Persons";
function EditPage() {
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  let phoneRegEx =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  let passportRegEx = /^[A-PR-WYa-pr-wy][1-9]\d\s?\d{4}[1-9]$/gm;
  let nameRegEx = /^[a-zA-Z]{3,10}$/;
  let heightRegEx = /^[0-9]{1,3}$/;

  const navigate = useNavigate();

  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newHeight, setNewHeight] = useState("");
  const [newWeight, setNewWeight] = useState("");
  const [newDateOfBirth, setNewDateOfBirth] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [newPassport, setNewPassport] = useState("");
  const [newId, setNewId] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [heightError, setHeightError] = useState("");
  const [weightError, setWeightError] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passportError, setPassportError] = useState("");

  var index = Persons.map(function (e) {
    return e.id;
  }).indexOf(newId);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = formValidate();

    if (isValid) {
      navigate("/cards");
    }

    let data = Persons[index];
    data.FirstName = newFirstName;
    data.LastName = newLastName;
    data.Gender = newGender;
    data.Height = newHeight;
    data.Weight = newWeight;
    data.DOB = newDateOfBirth;
    data.Passport = newPassport;
    data.PhoneNumber = newPhoneNumber;
    data.Email = newEmail;
  };

  useEffect(() => {
    setNewFirstName(localStorage.getItem("FirstName"));
    setNewLastName(localStorage.getItem("LastName"));
    setNewGender(localStorage.getItem("Gender"));
    setNewHeight(localStorage.getItem("Height"));
    setNewWeight(localStorage.getItem("Weight"));
    setNewDateOfBirth(localStorage.getItem("DateOfBirth"));
    setNewPassport(localStorage.getItem("Passport"));
    setNewPhoneNumber(localStorage.getItem("PhoneNumber"));
    setNewEmail(localStorage.getItem("Email"));
    setNewId(localStorage.getItem("Id"));
  }, []);

  const formValidate = () => {
    let isValid = true;

    if (nameRegEx.test(newFirstName)) {
      setFirstNameError("");
    } else {
      isValid = false;
      setFirstNameError("Enter first properly");
    }

    if (nameRegEx.test(newLastName)) {
      setLastNameError("");
    } else {
      isValid = false;
      setLastNameError("Enter last properly");
    }

    if (heightRegEx.test(newHeight)) {
      setHeightError("");
    } else {
      isValid = false;
      setHeightError("Enter height properly");
    }

    if (emailRegex.test(newEmail)) {
      setEmailError("");
    } else {
      isValid = false;
      setEmailError("Enter email properly");
    }

    if (heightRegEx.test(newWeight)) {
      setWeightError("");
    } else {
      isValid = false;
      setWeightError("Enter weight properly");
    }

    if (phoneRegEx.test(newPhoneNumber)) {
      setPhoneNumberError("");
    } else {
      isValid = false;
      setPhoneNumberError("Enter valid phone number");
    }

    if (!newGender.match("Select")) {
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

    if (new Date().getTime() > new Date(newDateOfBirth).getTime()) {
      setDateOfBirthError("");
    } else {
      isValid = false;
      setDateOfBirthError("Enter valid D.O.B");
    }

    if (passportRegEx.test(newPassport)) {
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
            <h2 className="pt-0">Edit Dependents</h2>
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
                        type="text"
                        required
                        value={newFirstName}
                        onChange={(e) => setNewFirstName(e.target.value)}
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
                        className="newInput_EP"
                        placeholder="Enter your height"
                        aria-label="Default select example"
                        value={newHeight}
                        onChange={(e) => setNewHeight(e.target.value)}
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
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
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
                        value={newLastName}
                        onChange={(e) => setNewLastName(e.target.value)}
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
                        className="newInput_EP"
                        placeholder="Enter your weight"
                        aria-label="Default select example"
                        value={newWeight}
                        onChange={(e) => setNewWeight(e.target.value)}
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
                        type="text"
                        required
                        value={newPhoneNumber}
                        onChange={(e) => setNewPhoneNumber(e.target.value)}
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
                        value={newGender}
                        onChange={(e) => setNewGender(e.target.value)}
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
                        value={newDateOfBirth}
                        onChange={(e) => setNewDateOfBirth(e.target.value)}
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
                        value={newPassport}
                        onChange={(e) => setNewPassport(e.target.value)}
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
                  Update
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

export default EditPage;
