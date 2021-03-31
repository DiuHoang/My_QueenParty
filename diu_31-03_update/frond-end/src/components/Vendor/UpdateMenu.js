import React, { Component } from "react";
import HeaderVendor from "./HeaderVendor";
import { Link } from "react-router-dom";
class UpdateVendor extends Component {
  constructor() {
    super();
    this.state = {
      updateProduct: [],
    };
    this.getProductToUpdate();
  }
  getProductToUpdate() {
    fetch("http://127.0.0.1:8000/api/showProVendor").then((response) => {
      response.json().then((data) => {
        console.log(data);
        this.setState({
          updateProduct: data,
        });
      });
    });
  }
  render() {
    return (
      <div className="include-page">
        {/* heder vendor */}
        <div>
          <HeaderVendor />
        </div>
        {/* <!-- Thực đơn nhà hàng --> */}
        <div style={{ display: "flex" }}>
          <div>
            <h5>
              <b>Thực đơn nhà hàng</b>
            </h5>
            <p>--------------------------------------</p>
          </div>
          <div>
            <Link to={"/addProVendor"}>
              <button className="btn-AddFood">Thêm món</button>
            </Link>
          </div>
        </div>
        {/* hiển thị sản phẩm */}
        <table className="show-product">
          <tr>
            <th>Tên món</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Giảm giá</th>
            <th>Cập nhật</th>
          </tr>
          {this.state.updateProduct.map((pro_update, index) => (
            <tr>
              <td>{pro_update.name_product}</td>
              <td>
                <img src={pro_update.picture} className="img-display-product" />
              </td>
              <td>
                {pro_update.price} <span>VNĐ</span>
              </td>
              <td>
                {pro_update.discount} <span>VNĐ</span>
              </td>
              <td>
                <button className="button-icon-product">
                  <i class="fa fa-trash" aria-hidden="true"></i>{" "}
                </button>{" "}
                <button className="button-icon-product">
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>{" "}
                </button>
              </td>
            </tr>
          ))}
        </table>
        <hr />
      </div>
    );
  }
}
export default UpdateVendor;
