import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Register.css";
import { useNavigate } from "react-router";
import countrycode from "../Assets/CountryCode.json";
// import CountryName from "../Assets/Country.json";
// import rajya from "../Assets/State.json";
// import cities from "../Assets/cities.json";
import { Country, State, City } from "country-state-city";
import { Link } from "react-router-dom";
export default function Register() {
  let emailRegex =
    /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
  let passwordRegEx = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
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

  // const [countrycode, setCountryCode] = useState([]);
  // const [stateid, setstateid] = useState("");
  // const [st, setSt] = useState([]);
  // const [countryid, setcountryid] = useState("");

  // setCountry(CountryName);
  // useEffect(() => {
  //   setCountryCode(countryCode);
  // }, []);

  // const handlecountry = (e) => {
  //   const getcountryid = e.target.value;
  //   setcountryid(getcountryid);
  // };

  // const handlestate = (e) => {
  //   const getstateid = e.target.value;
  //   setstateid(getstateid);
  // };

  // useEffect(() => {
  //   const filtercity = cities[2].data.filter(
  //     (data, index) => data.state_id === stateid
  //   );
  //   setcity(filtercity);
  // }, [stateid]);

  // useEffect(() => {
  //   const filterData = rajya[2].data.filter(
  //     (data, index) => data.country_id === countryid
  //   );
  //   setSt(filterData);
  // }, [countryid]);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [pnumber, setPnumber] = useState();
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [pinCode, setPinCode] = useState();
  const [address, setAddress] = useState();
  const [countryCode, setCountryCode] = useState();

  const [fnameError, setfnameError] = useState();
  const [lnameError, setlnameError] = useState();
  const [emailError, setemailError] = useState();
  const [addressError, setaddressError] = useState();
  const [pinCodeError, setPinCodeError] = useState();
  const [pnumberError, setPnumberError] = useState();
  const [passwordError, setpasswordError] = useState();
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

    let email = e.target[2].value;
    if (emailRegex.test(email)) {
      setemailError("");
    } else {
      setemailError("Enter Valid Email");
    }

    let password = e.target[3].value;
    if (passwordRegEx.test(password)) {
      setpasswordError("");
    } else {
      setpasswordError("Enter valid password");
    }

    let countryCode = e.target[4].value;
    if (countryCode.match("000")) {
      setCountryCodeError("+000");
    } else {
      setCountryCodeError("");
    }

    let pnumber = e.target[5].value;
    if (phoneRegEx.test(pnumber)) {
      setPnumberError("");
    } else {
      setPnumberError("Enter valid phone number");
    }

    let countryValue = e.target[6].value;
    if (countryValue.match("Select")) {
      setcountryError("Select Country");
    } else {
      setcountryError("");
    }

    let stateValue = e.target[7].value;
    if (stateValue.match("Select")) {
      setstateError("Select State");
    } else {
      setstateError("");
    }

    let cityValue = e.target[8].value;
    if (cityValue.match("Select")) {
      setcityError("Select City");
    } else {
      setcityError("");
    }

    let address = e.target[9].value;
    if (address.length > 8) {
      setaddressError("");
    } else {
      setaddressError("Enter Valid Address");
    }

    let pinCode = e.target[10].value;
    if (pinCodeRegEx.test(pinCode)) {
      setPinCodeError("");
    } else {
      setPinCodeError("Enter valid Pin");
    }

    if (
      fname.length > 3 &&
      lname.length > 3 &&
      emailRegex.test(email) &&
      passwordRegEx.test(password) &&
      phoneRegEx.test(pnumber) &&
      address.length > 8 &&
      pinCodeRegEx.test(pinCode) &&
      countryCode.match("+000") &&
      cityValue.match("Select") &&
      stateValue.match("Select") &&
      countryValue.match("Select")
    ) {
      navigate("/");
    }
  };

  return (
    <div className="main">
      <div className="containers">
        <div className="d-flex justify-content-center">
          <h2 className="pt-0">Register Yourself</h2>
        </div>
        <hr />
        <Form
          className="mt-3 d-flex flex-column"
          id="scrollbar"
          onSubmit={handleSubmit}
        >
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
                    className="newInput"
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
                    type="text"
                    required
                    value={lname}
                    placeholder="Enter last name"
                    className="newInput"
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
                    className="newInput"
                  />
                  <span style={{ color: "red", fontSize: "15px" }}>
                    {emailError}
                  </span>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicPassword">
                  <Form.Label>
                    <b>Password</b>
                  </Form.Label>
                  <Form.Control
                    required
                    type="password"
                    placeholder="Password"
                    className="newInput"
                    value={password}
                  />
                  <span style={{ color: "red", fontSize: "15px" }}>
                    {passwordError}
                  </span>
                </Form.Group>

                <Form.Group className="mb-1" controlId="formBasicEmail">
                  <Form.Label>
                    <b>Phone Number</b>
                  </Form.Label>
                  <div className="d-flex flex-row">
                    <div className="d-grid col-2">
                      <select
                        name="country-code"
                        className="form-control"
                        required
                      >
                        <option>+000</option>
                        {countrycode.map((e) => (
                          <option key={e.name}>{e.flag + e.dial_code}</option>
                        ))}
                      </select>
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {countryCodeError}
                      </span>
                    </div>
                    <div className="d-grid col-10">
                      <Form.Control
                        required
                        className="newInput1"
                        type="text"
                        value={pnumber}
                        placeholder="Enter phone number"
                      />
                      <span style={{ color: "red", fontSize: "15px" }}>
                        {pnumberError}
                      </span>
                    </div>
                  </div>
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
                    required
                    name="country"
                    className="form-control newInput"
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
                    required
                    name="state"
                    className="form-control newInput"
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
                    required
                    name="city"
                    className="form-control newInput"
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
                    className="newInput"
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
                    className="newInput"
                  />
                  <span style={{ color: "red", fontSize: "15px" }}>
                    {pinCodeError}
                  </span>
                </Form.Group>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button variant="primary" type="submit" className="btn mt-2">
              Submit
            </Button>
            <p>
              Remeber your account?
              <Link as={Link} to="/" style={{ color: "black" }}>
                {" "}
                Login
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}
