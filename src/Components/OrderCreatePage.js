import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./Dashboard.css";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/Modal";
import Items from "./Items";
import { AiFillDelete } from "react-icons/ai";

function OrderCreateList() {
  const history = useNavigate();

  const handleDelete = (id) => {
    var index = Items.map(function (e) {
      return e.ID;
    }).indexOf(id);

    Items.splice(index, 1);

    history("/orderList");
  };

  const [show, setShow] = useState(false);

  const [lineItem, setLineItem] = useState();
  const [productId, setProductId] = useState();
  const [pricePerPiar, setPricePerPiar] = useState();
  const [totalPrice, setTotalPrice] = useState();
  const [design, setDesign] = useState();
  const [size, setSize] = useState();
  const [quantity, setQuantity] = useState();

  const [lineItemError, setLineItemError] = useState();
  const [productIdError, setProductIdError] = useState();
  const [pricePerPiarError, setPricePerPiarError] = useState();
  const [totalPriceError, setTotalPriceError] = useState();
  const [designError, setDesignError] = useState();
  const [sizeError, setSizeError] = useState();
  const [quantityError, setQuantityError] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    let lineItem = e.target[0].value;
    if (lineItem.length >= 1) {
      setLineItemError("");
    } else {
      setLineItemError("Enter line item id");
    }

    let productId = e.target[1].value;
    if (productId.length >= 1) {
      setProductIdError("");
    } else {
      setProductIdError("Enter product id");
    }

    let pricePerPiar = e.target[2].value;
    if (pricePerPiar.length >= 1) {
      setPricePerPiarError("");
    } else {
      setPricePerPiarError("Enter price per pair");
    }

    let totalPrice = e.target[3].value;
    if (totalPrice.length >= 1) {
      setTotalPriceError("");
    } else {
      setTotalPriceError("Enter total price");
    }

    let design = e.target[4].value;
    if (!design.match("SELECT")) {
      setDesignError("");
    } else {
      setDesignError("Enter design");
    }

    let size = e.target[5].value;
    if (!size.match("SELECT")) {
      setSizeError("");
    } else {
      setSizeError("Enter size");
    }

    let quantity = e.target[6].value;
    if (quantity.length >= 1) {
      setQuantityError("");
    } else {
      setQuantityError("Enter quantity");
    }

    if (
      lineItem.length >= 1 &&
      productId.length >= 1 &&
      pricePerPiar.length >= 1 &&
      totalPrice.length >= 1 &&
      !design.match("SELECT") &&
      !size.match("SELECT") &&
      quantity.length >= 1
    ) {
      setLineItem("");
      setProductId("");
      setPricePerPiar("");
      setTotalPrice("");
      setDesign("");
      setSize("");
      setQuantity("");
      Items.push({
        ID: lineItem,
        DESIGN: design,
        PRODUCTID: productId,
        SIZE: size,
        PRICEPERPAIR: pricePerPiar,
        QUANTITY: quantity,
        TOTALPRICE: totalPrice,
      });
      setShow(false);
    }
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
        <div className="d-flex flex-column">
          <div>
            <h2 className="pt-2" style={{ textAlign: "center" }}>
              Order List
            </h2>
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
                  <th>Line Item Id</th>
                  <th>DESIGN</th>
                  <th>Product Id</th>
                  <th>Size</th>
                  <th>Price Per Pair</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Items && Items.length > 0
                  ? Items.map((count, index) => {
                      return (
                        <tr key={index} value={count.ID}>
                          <td>{count.ID}</td>
                          <td>{count.DESIGN}</td>
                          <td>{count.PRODUCTID}</td>
                          <td>{count.SIZE}</td>
                          <td>{count.PRICEPERPAIR}</td>
                          <td>{count.QUANTITY}</td>
                          <td>{count.TOTALPRICE}</td>
                          <td>
                            <AiFillDelete
                              style={{
                                textDecoration: "underlined",
                                color: "red",
                              }}
                              onClick={(e) => handleDelete(count.ID)}
                              size={20}
                            />
                          </td>
                        </tr>
                      );
                    })
                  : "No data available"}
              </tbody>
            </Table>
            <Modal size="lg" show={show} onHide={() => setShow(false)} centered>
              <Modal.Header>
                <Modal.Title>Add Items</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <div className="d-flex flex-row">
                    <div className="d-grid col-6 p-2">
                      <div className="d-flex flex-column">
                        <Form.Group className="p-2">
                          <Form.Label>
                            <b>Line Item Id</b>
                          </Form.Label>
                          <Form.Control
                            value={lineItem}
                            required
                            type="text"
                            placeholder="Enter Line Item Id"
                            onChange={(e) => setLineItem(e.target.value)}
                          />
                          <span style={{ color: "red", fontSize: "15px" }}>
                            {lineItemError}
                          </span>
                        </Form.Group>
                        <Form.Group className="p-2">
                          <Form.Label>
                            <b>Product Id</b>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            required
                            placeholder="Enter Product Id"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                          />
                          <span style={{ color: "red", fontSize: "15px" }}>
                            {productIdError}
                          </span>
                        </Form.Group>
                        <Form.Group className="p-2">
                          <Form.Label>
                            <b>Price Per Pair</b>
                          </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter Price Per Pair"
                            value={pricePerPiar}
                            onChange={(e) => setPricePerPiar(e.target.value)}
                          />
                          <span style={{ color: "red", fontSize: "15px" }}>
                            {pricePerPiarError}
                          </span>
                        </Form.Group>
                        <Form.Group className="p-2">
                          <Form.Label>
                            <b>Total Price</b>
                          </Form.Label>
                          <Form.Control
                            type="text"
                            required
                            placeholder="Enter Total Price"
                            value={totalPrice}
                            onChange={(e) => setTotalPrice(e.target.value)}
                          />
                          <span style={{ color: "red", fontSize: "15px" }}>
                            {totalPriceError}
                          </span>
                        </Form.Group>
                      </div>
                    </div>
                    <div className="d-grid col-6 p-2">
                      <div className="d-flex flex-column">
                        <Form.Group className="p-2">
                          <Form.Label>
                            <b>DESIGN</b>
                          </Form.Label>
                          <Form.Select required>
                            <option
                              value={design}
                              onChange={(e) => setDesign(e.target.value)}
                            >
                              SELECT
                            </option>
                            <option
                              value={design}
                              onChange={(e) => setDesign(e.target.value)}
                            >
                              Indian
                            </option>
                            <option
                              value={design}
                              onChange={(e) => setDesign(e.target.value)}
                            >
                              Western
                            </option>
                          </Form.Select>
                          <span style={{ color: "red", fontSize: "15px" }}>
                            {designError}
                          </span>
                        </Form.Group>
                        <Form.Group className="p-2">
                          <Form.Label>
                            <b>Size</b>
                          </Form.Label>
                          <Form.Select required>
                            <option
                              value={size}
                              onChange={(e) => setSize(e.target.value)}
                            >
                              SELECT
                            </option>
                            <option
                              value={size}
                              onChange={(e) => setSize(e.target.value)}
                            >
                              S
                            </option>
                            <option
                              value={size}
                              onChange={(e) => setSize(e.target.value)}
                            >
                              M
                            </option>
                            <option
                              value={size}
                              onChange={(e) => setSize(e.target.value)}
                            >
                              L
                            </option>
                            <option
                              value={size}
                              onChange={(e) => setSize(e.target.value)}
                            >
                              XL
                            </option>
                          </Form.Select>
                          <span style={{ color: "red", fontSize: "15px" }}>
                            {sizeError}
                          </span>
                        </Form.Group>
                        <Form.Group className="p-2">
                          <Form.Label>
                            <b>Quantity</b>
                          </Form.Label>
                          <Form.Control
                            required
                            type="text"
                            placeholder="Enter Quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                          />
                          <span style={{ color: "red", fontSize: "15px" }}>
                            {quantityError}
                          </span>
                        </Form.Group>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-center mt-3">
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => setShow(false)}
                    >
                      Close
                    </Button>
                    <Button variant="success" className="mx-2" type="submit">
                      Save
                    </Button>
                  </div>
                </Form>
              </Modal.Body>
            </Modal>
            <Button
              variant="secondary"
              style={{ float: "right" }}
              onClick={() => setShow(true)}
            >
              +ADD LINE ITEM
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderCreateList;
