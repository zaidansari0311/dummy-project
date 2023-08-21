import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Persons from "./Persons";
import { MdDeleteOutline } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { HiViewfinderCircle } from "react-icons/hi2";

function Cards() {
  const history = useNavigate();

  const handleEdit = (
    newId,
    newFirstName,
    newLastName,
    newGender,
    newHeight,
    newWeight,
    newDateOfBirth,
    newEmail,
    newPhoneNumber,
    newPassport
  ) => {
    localStorage.setItem("FirstName", newFirstName);
    localStorage.setItem("LastName", newLastName);
    localStorage.setItem("Gender", newGender);
    localStorage.setItem("Height", newHeight);
    localStorage.setItem("Weight", newWeight);
    localStorage.setItem("DateOfBirth", newDateOfBirth);
    localStorage.setItem("Passport", newPassport);
    localStorage.setItem("PhoneNumber", newPhoneNumber);
    localStorage.setItem("Email", newEmail);
    localStorage.setItem("Id", newId);
    
  };

  const handleDelete = (id) => {
    var index = Persons.map(function (e) {
      return e.id;
    }).indexOf(id);

    Persons.splice(index, 1);

    history("/cards");
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
        <div className="d-flex flex-column p-3">
          <div className="row p-1">
            {Persons && Persons.length > 0
              ? Persons.map((data) => {
                  return (
                    <div className="col-4 py-2" key={data.id}>
                      <Card
                        style={{
                          width: "auto",
                          height: "auto",
                          backgroundColor: "#ebe9e9",
                        }}
                        value={data.id}
                      >
                        <Card.Body className="d-flex flex-column">
                          <div className="d-flex flex-row justify-content-between py-1">
                            <div>
                              <b>Full Name:</b>
                              <br />
                              {data.FirstName} {data.LastName}
                            </div>
                            <div>
                              <MdDeleteOutline
                                onClick={(e) => handleDelete(data.id)}
                                size={20}
                                style={{
                                  textDecoration: "underlined",
                                  color: "red",
                                }}
                              />
                              <Link as={Link} to="/editpage">
                                <BiEdit
                                  size={20}
                                  onClick={() =>
                                    handleEdit(
                                      data.id,
                                      data.FirstName,
                                      data.LastName,
                                      data.Gender,
                                      data.Height,
                                      data.Weight,
                                      data.DOB,
                                      data.Email,
                                      data.PhoneNumber,
                                      data.Passport
                                    )
                                  }
                                />
                              </Link>
                              <Link as={Link} to="/viewpage">
                                <HiViewfinderCircle
                                  size={20}
                                  style={{
                                    textDecoration: "underlined",
                                    color: "green",
                                  }}
                                />
                              </Link>
                            </div>
                          </div>
                          <div className="d-flex flex-row justify-content-between py-1">
                            <div>
                              <b>Date of Birth:</b>
                              <br />
                              {data.DOB}
                            </div>
                            <div>
                              <b>Gender:</b>
                              <br />
                              {data.Gender}
                            </div>
                          </div>
                          <div className="py-1">
                            <b>Email:</b>
                            <br />
                            {data.Email}
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })
              : "No data available!"}
          </div>
          <div className="p-1">
            <Link as={Link} to="/createpage">
              <Button variant="secondary" style={{ float: "left" }}>
                Add Dependencies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
