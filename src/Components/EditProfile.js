import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EditProfile.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import countrycode from "../Assets/CountryCode.json";
import { Country, State, City } from "country-state-city";

function EditProfile() {
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  let pinCodeRegEx = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
  let phoneRegEx =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  let nameRegEx = /^[a-zA-Z]{3,10}$/;

  const country = Country.getAllCountries();
  const state = State.getAllStates();
  const city = City.getAllCities();
  const navigate = useNavigate();

  const [countryValue, setCountryValue] = useState("");
  const handleCountry = (e) => {
    setCountryValue(e.target.value);
  };
  const filtertedStates = state.filter((stateObj) => {
    if (stateObj.countryCode === countryValue) {
      return true;
    }
  });
  const [stateValue, setStateValue] = useState("");
  const handleState = (e) => {
    setStateValue(e.target.value);
  };
  const filtertedCites = city.filter((cityObj) => {
    if (cityObj.stateCode === stateValue) {
      return true;
    }
  });

  const [cityValue, setCityValue] = useState("");
  const handleCity = (e) => {
    setCityValue(e.target.value);
  };

  const [email, setEmail] = useState("zaidansari@gmail.com");
  const [password, setPassword] = useState();
  const [pnumber, setPnumber] = useState();
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [pinCode, setPinCode] = useState();
  const [address, setAddress] = useState();
  const [countryCode, setCountryCode] = useState();

  const [fnameError, setfnameError] = useState();
  const [lnameError, setlnameError] = useState();
  // const [emailError, setemailError] = useState();
  const [addressError, setaddressError] = useState();
  const [pinCodeError, setPinCodeError] = useState();
  const [pnumberError, setPnumberError] = useState();
  const [countryError, setcountryError] = useState();
  const [stateError, setstateError] = useState();
  const [cityError, setcityError] = useState();
  const [countryCodeError, setCountryCodeError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    let fname = e.target[0].value;
    if (fname.length < 3) {
      setfnameError("First name is too short!");
    } else if (10 < fname.length) {
      setfnameError("First name is too long!");
    } else if (!nameRegEx.test(fname)) {
      setfnameError("Invalid first name!");
    } else {
      setfnameError("");
    }

    let lname = e.target[1].value;
    if (lname.length < 3) {
      setlnameError("Last name is too short");
    } else if (10 < lname.length) {
      setlnameError("Last name is too long");
    } else if (!nameRegEx.test(lname)) {
      setlnameError("Invalid last name!");
    } else {
      setlnameError("");
    }

    // let email = e.target[2].value;
    // if (emailRegex.test(email)) {
    //   setemailError("");
    // } else {
    //   setemailError("Enter Valid Email");
    // }

    let countryCode = e.target[3].value;
    if (countryCode.match("Select")) {
      setCountryCodeError("Select Country Code");
    } else {
      setCountryCodeError("");
    }

    let pnumber = e.target[4].value;
    if (phoneRegEx.test(pnumber)) {
      setPnumberError("");
    } else {
      setPnumberError("Enter valid phone number");
    }

    let countryValue = e.target[5].value;
    if (countryValue.match("Select")) {
      setcountryError("Select Country");
    } else {
      setcountryError("");
    }

    let stateValue = e.target[6].value;
    if (stateValue.match("Select")) {
      setstateError("Select State");
    } else {
      setstateError("");
    }

    let cityValue = e.target[7].value;
    if (cityValue.match("Select")) {
      setcityError("Select City");
    } else {
      setcityError("");
    }

    let address = e.target[8].value;
    if (address.length > 8) {
      setaddressError("");
    } else {
      setaddressError("Enter Valid Address");
    }

    let pinCode = e.target[9].value;
    if (pinCodeRegEx.test(pinCode)) {
      setPinCodeError("");
    } else {
      setPinCodeError("Enter valid Pin");
    }

    if (
      fname.length > 3 &&
      lname.length > 3 &&
      phoneRegEx.test(pnumber) &&
      address.length > 8 &&
      pinCodeRegEx.test(pinCode) &&
      countryCode.match("Select") &&
      cityValue.match("Select") &&
      stateValue.match("Select") &&
      countryValue.match("Select")
    ) {
      navigate("/dashboard");
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
            <h2 className="pt-0">Edit Profile</h2>
          </div>
          <hr />
          <div className="mt-3 d-flex flex-column">
            <Form onSubmit={handleSubmit}>
              <div className="d-flex flex-row">
                <div className="d-grid col-6 mx-4">
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>First Name</b>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={fname}
                        placeholder="Enter first name"
                        className="newInput_EP"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {fnameError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Last Name</b>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={lname}
                        placeholder="Enter last name"
                        className="newInput_EP"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {lnameError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Email address</b>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={email}
                        placeholder="Enter email"
                        className="newInput_EP"
                        disabled
                      />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Phone Number</b>
                      </Form.Label>
                      <select
                        name="country-code"
                        className="form-control newInput_EP"
                      >
                        <option>--Select Country Code--</option>
                        {countrycode.map((e) => (
                          <option key={e.name}>{e.flag + e.dial_code}</option>
                        ))}
                      </select>
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {countryCodeError}
                      </span>
                      <Form.Control
                        required
                        className="newInput_EP mt-3"
                        type="text"
                        value={pnumber}
                        placeholder="Enter phone number"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {pnumberError}
                      </span>
                    </Form.Group>
                  </div>
                </div>

                <div className="d-grid col-6 mx-4">
                  <div className="d-flex flex-column">
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Country</b>
                      </Form.Label>
                      <select
                        name="country"
                        className="form-control newInput_EP"
                        onChange={handleCountry}
                      >
                        <option>--Select Country--</option>
                        {country.map((e) => (
                          <option value={e.isoCode} key={e.isoCode}>
                            {" "}
                            {e.name}{" "}
                          </option>
                        ))}
                      </select>
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {countryError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>State</b>
                      </Form.Label>
                      <select
                        name="state"
                        className="form-control newInput_EP"
                        onChange={handleState}
                      >
                        <option>--Select State--</option>
                        {filtertedStates.map((e) => (
                          <option value={e.isoCode} key={e.isoCode}>
                            {" "}
                            {e.name}{" "}
                          </option>
                        ))}
                      </select>
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {stateError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>City</b>
                      </Form.Label>
                      <select
                        name="city"
                        className="form-control newInput_EP"
                        onChange={handleCity}
                      >
                        <option>--Select City--</option>
                        {filtertedCites.map((e) => (
                          <option key={e.isoCode}>{e.name}</option>
                        ))}
                      </select>
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {cityError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Address</b>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={address}
                        placeholder="Enter Address"
                        className="newInput_EP"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {addressError}
                      </span>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                      <Form.Label>
                        <b>Pin Code</b>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        value={pinCode}
                        placeholder="Enter Pin"
                        className="newInput_EP"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {pinCodeError}
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

export default EditProfile;
