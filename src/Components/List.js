import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./List.css";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
function List() {
  const [getTable, setTable] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const gettabledata = async () => {
      const reqData = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const resData = await reqData.json();
      // console.log(resData);
      setTable(await resData);
    };
    gettabledata();
  }, [refresh]);
  // const [filterEmail, setFilterEmail] = useState("");

  const navigate = useNavigate();
  const view = (id) => {
    navigate(`/detail/${id}`);
  };

  const [filterName, setFilterName] = useState("");
  const handleName = (e) => {
    e.preventDefault();
    setFilterName(e.target.value);
  };

  const search = (e) => {
    setTable(
      getTable.filter((data) =>
        data.name.toLowerCase().includes(filterName.toLowerCase())
      )
    );
  };

  const handleClear = (e) => {
    setFilterName("");
    setRefresh(refresh + 1);
  };

  return (
    <div className="d-flex flex-row" style={{ height: "100vh" }}>
      <div className="d-grid col-2">
        <div className="d-flex flex-column navBar">
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
        className="d-grid col-10 List"
        style={{ backgroundColor: "#cfcece" }}
      >
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            <h2 className="pt-2">Users List</h2>
          </div>
          <div className="d-flex flex-row p-2">
            <div className="d-flex flex-row justify-content-start mx-2">
              <label className="form-label">
                <b>Search by Name:</b>
              </label>
              <input
                placeholder="Name"
                className="form-control mx-2"
                value={filterName}
                onChange={handleName}
                style={{ width: "30vw" }}
              />
            </div>
            <div className="d-flex justify-content-end">
              <Button className="mx-2" onClick={(e) => search(e)}>
                Filter
              </Button>
              <Button className="mx-2" onClick={handleClear}>
                Clear
              </Button>
            </div>
          </div>
          <div className="p-2" id="scrollbar" style={{ height: "83vh" }}>
            <Table
              striped
              bordered
              hover
              id="scrollbar"
              style={{ backgroundColor: "white" }}
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Post Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {getTable.map((resTable, index) => (
                  <tr key={index} value={resTable.id}>
                    <td>{resTable.id}</td>
                    <td>{resTable.postId}</td>
                    <td>{resTable.name}</td>
                    <td>{resTable.email}</td>
                    <td>
                      <Button
                        onClick={() => {
                          view(resTable.id);
                        }}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
