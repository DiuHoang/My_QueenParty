import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Swal from "sweetalert2";

export default class AddProVendor extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
    this.onChangeExpensePicture = this.onChangeExpensePicture.bind(this);
    this.onChangeExpensePrice = this.onChangeExpensePrice.bind(this);
    this.onChangeExpenseDiscount = this.onChangeExpenseDiscount.bind(this);
    this.onChangeExpenseDescription = this.onChangeExpenseDescription.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name_product: "",
      picture: "",
      price: "",
      discount: "",
      description: "",
    };
  }

  onChangeExpenseName(e) {
    this.setState({ name_product: e.target.value });
  }

  onChangeExpensePicture(e) {
    this.setState({ picture: e.target.value });
  }
  onChangeExpensePrice(e) {
    this.setState({ price: e.target.value });
  }
  onChangeExpenseDiscount(e) {
    this.setState({ discount: e.target.value });
  }

  onChangeExpenseDescription(e) {
    this.setState({ description: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const product = {
      name_product: this.state.name_product,
      picture: this.state.picture,
      price: this.state.price,
      discount: this.state.discount,
      description: this.state.description,
    };
    axios
      .post("http://localhost:8000/api/addProVendor/", product)
      .then((res) => console.log(res.data));

    Swal.fire("Good job!", "Your Product Added Successfully", "success");

    this.setState({
      name_product: "",
      picture: "",
      price: "",
      discount: "",
      description: "",
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="name_product">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.name_product}
                  onChange={this.onChangeExpenseName}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="picture">
                <Form.Label>Hinh anh</Form.Label>
                <Form.Control
                  type="file"
                  value={this.state.picture}
                  onChange={this.onChangeExpensePicture}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.price}
                  onChange={this.onChangeExpensePrice}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="dsicount">
                <Form.Label>dsicount</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.dsicount}
                  onChange={this.onChangeExpensedsicount}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="textarea"
              value={this.state.description}
              onChange={this.onChangeExpenseDescription}
            />
          </Form.Group>

          <Button variant="primary" size="lg" block="block" type="submit">
            Add Product
          </Button>
        </Form>
        <br></br>
        <br></br>
      </div>
    );
  }
}
