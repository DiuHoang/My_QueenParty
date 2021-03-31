import React, { Component } from "react";
import "../Contact.css";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Swal from "sweetalert2";
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: [],
      orders: [],
      id: "",
      product_id: "",
    };
    var id = props.match.params.id;
    this.getProductDetail(id);
    this.postProductDetail = this.postProductDetail.bind(this);
  }
  getProductDetail(id) {
    fetch("http://127.0.0.1:8000/api/product/detail/" + id).then((response) => {
      response.json().then((data) => {
        console.log(data);
        this.setState({
          productDetail: data,
        });
      });
    });
  }
  postProductDetail(event) {
    event.preventDefault();
    var id = this.props.match.params.id;
    let orders = {
      product_id: id,
    };
    let postInJson = JSON.stringify(orders);
    fetch("http://127.0.0.1:8000/api/product/orderlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: postInJson,
    }).then((response) => {
      response.json();
      Swal.fire(
        "Good job!",
        "Your pProduct Added Cart Suscessfully",
        "success"
      );
    });
  }
  render() {
    var { productDetail } = this.state;
    var { orders } = this.state;
    return (
      <div>
        <div className="flex-container">
          <div style={{ flexGrow: "3" }} className="left-box">
            <div>
              <img
                style={{ height: "250px" }}
                src={"/" + this.state.productDetail.picture}
                controls
              ></img>
            </div>
          </div>
          <div style={{ flexGrow: "7", padding: "20px" }}>
            <div>
              <div style={{ display: "flex" }}>
                <h4>Ten nha hang: </h4>
                <h4 style={{ fontWeight: "bold", marginLeft: "10px" }}>
                  {this.state.productDetail.name_product}
                </h4>
              </div>
              <div style={{ display: "flex" }}>
                <h4>Sdt nha hang: </h4>
                <h4 style={{ fontWeight: "bold", marginLeft: "10px" }}>
                  {this.state.productDetail.price}
                </h4>
              </div>
              <div style={{ display: "flex" }}>
                <h4>Dia chi nha hang: </h4>
                <h4 style={{ fontWeight: "bold", marginLeft: "10px" }}>
                  {this.state.productDetail.discount}
                </h4>
              </div>
              <div style={{ display: "flex" }}>
                <h4>Email nha hang: </h4>
                <h4 style={{ fontWeight: "bold", marginLeft: "10px" }}>
                  {this.state.productDetail.description}
                </h4>
              </div>
              <div style={{ display: "flex" }}>
                <h4>Thoi gian mo cua: </h4>
                <h4 style={{ fontWeight: "bold", marginLeft: "10px" }}>
                  {this.state.productDetail.category_id}
                </h4>
              </div>
              <div style={{ display: "flex" }}>
                <h4>Mo ta: </h4>
                <h4 style={{ fontWeight: "bold", marginLeft: "10px" }}>
                  {this.state.productDetail.vendor_id}
                </h4>
              </div>
              <button
                onClick={this.postProductDetail}
                type="submit"
                style={{ height: "70px" }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(ProductDetail);
