import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
function Dashboard() {
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
      <div className="d-grid col-10 dashBoard"></div>
    </div>
  );
}

export default Dashboard;
