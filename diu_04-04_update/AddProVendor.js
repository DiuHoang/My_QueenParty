import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Swal from "sweetalert2";
import { withRouter } from "react-router";

class AddProVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_product: "",
      picture: "",
      price: "",
      discount: "",
      description: "",
      category_id: "",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //FileChange
  handleChange(event) {
    event.preventDefault();
    this.setState({
      name_product = event.target["name_product"].value,
      picture: event.target.files[0],
      price = event.target["price"].value,
      discount = event.target["discount"].value,
      description = event.target["description"].value,
      category_id = event.target["category_id"].value,
    });
  }
  onSubmit() {
    const data = new FormData();
    data.append("file", this.state.picture);

    // let name_product = event.target["name_product"].value;
    // let picture = event.target["picture"].value;
    // fd.append("picture", this.state.picture);
    // let price = event.target["price"].value;
    // let discount = event.target["discount"].value;
    // let description = event.target["description"].value;
    // let category_id = event.target["category_id"].value;

    let products = {
      name_product: name_product,
      picture: picture,
      price: price,
      discount: discount,
      description: description,
      category_id: category_id,
    };

    let postInJson = JSON.stringify(products);
    console.log(postInJson);
    fetch("http://localhost:8000/api/addProVendor/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: postInJson,
    }).then((response) => {
      console.log(response);
      alert(" Bạn đã Add thành công!");
      this.props.history.push("/showVendor"); // chuyển trang
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Add</h1>
          <input type="text" name="name_product" placeholder="Name" />
          <input onChange={this.handleChange} type="file" name="picture" />
          <input type="number" name="price" placeholder="Price" />
          <input type="number" name="discount" placeholder="Discount" />
          <input type="text" name="description" placeholder="Description" />
          <select name="category_id" selected>
            <option value="Loa máy">Loa máy</option>
            <option value="Đồ ăn">Đồ ăn</option>
            <option value="trang trí">Trang trí</option>
            <option value="Bàn ghế">Bàn ghế</option>
            <option value="Bánh kem">Bánh kem</option>
          </select>
          <button type="submit" name="submit">
            Add
          </button>
          {/* <label>
            Name_Product:
            <input
              value={this.state.name_product}
              onChange={this.onChangeExpenseName}
            />
          </label>
          <label>
            Picture:
            <input
              type="file"
              value={this.state.picture}
              onChange={this.onChangeExpensePicture}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={this.state.price}
              onChange={this.onChangeExpensePrice}
            />
          </label>
          <label>
            Discount:
            <input
              type="number"
              value={this.state.discount}
              onChange={this.onChangeExpenseDiscount}
            />
          </label>
          <label>
            Description:
            <input
              value={this.state.description}
              onChange={this.onChangeExpenseDescription}
            />
          </label>
          <label>
            Category:
            <select
              value={this.state.category_id}
              onChange={this.onChangeExpenseCategory}
            >
              <option value="Loa máy">Loa máy</option>
              <option value="Đồ ăn">Đồ ăn</option>
              <option value="trang trí">Trang trí</option>
              <option value="Bàn ghế">Bàn ghế</option>
              <option value="Bánh kem">Bánh kem</option>
            </select>
          </label>
          <input type="submit" value="Submit" /> */}
        </form>
      </div>
    );
  }
}
export default withRouter(AddProVendor);
