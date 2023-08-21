import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { Link, useParams } from "react-router-dom";
import "./Dashboard.css";
export default function Detail() {
  let articleId = useParams();
  const [dataId, setDataId] = useState("");
  const [dataPostId, setDataPostId] = useState("");
  const [nameData, setNameData] = useState("");
  const [dataEmail, setDataEmail] = useState("");
  const [dataBody, setBodyData] = useState("");

  useEffect(() => {
    const gettabledata = async () => {
      const reqData = await fetch(
        `https://jsonplaceholder.typicode.com/comments/${articleId.id}`
      );
      const resData = await reqData.json();
      setDataId(await resData.id);
      setDataPostId(await resData.postId);
      setNameData(await resData.name);
      setDataEmail(await resData.email);
      setBodyData(await resData.body);
      // console.log(await resData);
      // console.log(articleId);
    };
    gettabledata();
  }, [articleId]);

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
      <div
        className="d-grid col-10"
        style={{ height: "100vh", width: "100wh", backgroundColor: "white" }}
      >
        <div className="d-flex flex-column">
          <div
            className="m-0"
            style={{
              width: "auto",
              height: "auto",
              border: "2px solid black",
              padding: "50px",
              borderRadius: "25px",
              backgroundColor: "rgb(247 241 241)",
            }}
          >
            <div className="d-flex flex-column">
              <div className="p-2">
                <b>Id:</b> {dataId}
                <br />
              </div>
              <div className="p-2">
                <b>Post Id:</b> {dataPostId}
                <br />
              </div>
              <div className="p-2">
                <b>Name:</b> {nameData}
                <br />
              </div>
              <div className="p-2">
                <b>Email:</b> {dataEmail}
                <br />
              </div>
              <div className="p-2">
                <b>Body:</b> {dataBody}
              </div>
            </div>
          </div>
          <div>
            <Link
              as={Link}
              to="/table"
              className="d-flex justify-content-center"
            >
              <Button className="m-3">Back</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
