import React, { Component } from "react";
import "./Service.css";
import { Link } from "react-router-dom";
class Service extends Component {
  constructor() {
    super();
    this.state = {
      categories1: [],
      categories2: [],
      categories3: [],
      categories4: [],
    };
    this.getCategory1();
    this.getCategory2();
    this.getCategory3();
    this.getCategory4();
  }
  getCategory1() {
    fetch("http://127.0.0.1:8000/api/product1").then((response) => {
      response.json().then((data) => {
        console.log(data);
        this.setState({
          categories1: data,
        });
      });
    });
  }
  getCategory2() {
    fetch("http://127.0.0.1:8000/api/product2").then((response) => {
      response.json().then((data) => {
        console.log(data);
        this.setState({
          categories2: data,
        });
      });
    });
  }
  getCategory3() {
    fetch("http://127.0.0.1:8000/api/product3").then((response) => {
      response.json().then((data) => {
        console.log(data);
        this.setState({
          categories3: data,
        });
      });
    });
  }
  getCategory4() {
    fetch("http://127.0.0.1:8000/api/product4").then((response) => {
      response.json().then((data) => {
        console.log(data);
        this.setState({
          categories4: data,
        });
      });
    });
  }
  render() {
    return (
      <div>
        <h2 className="title-service">
          Queen Party - Cung cấp hệ thống dịch vụ cao cấp
        </h2>
        <div className="intro">
          <div className="row align-items-center my-5">
            <div className="col-lg-3">
              <div
                className="container cart_content"
                style={{ width: "360px", height: "300px" }}
              >
                <a>
                  <img
                    className="imageShow"
                    src="image/food_content/comchien.jpg"
                    alt=""
                  />
                </a>
                <p>
                  Đơn hàng của bạn sẽ được bảo quản như thế nào? Queen Party sẽ
                  bảo quản đơn của bạn bằng túi & thùng để chống nắng mưa, giữ
                  nhiệt... trên đường đi một cách tốt nhất
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="container cart_content"
                style={{ width: "360px", height: "300px" }}
              >
                <a>
                  <img
                    src="image/Speaker/loa2.jpg"
                    alt=""
                    className="imageShow"
                  />
                </a>
                <p>
                  Loa vi tính, loa có dây đa dạng mẫu mã đến từ các thương hiệu
                  nổi tiếng, âm thanh chất lượng cao. Giao hàng tận nơi
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="container cart_content"
                style={{ width: "360px", height: "300px" }}
              >
                <a>
                  <img
                    src="image/Table/ban1.jpeg"
                    alt=""
                    className="imageShow"
                  />
                </a>
                <p>
                  Đồ trang trí nội thất trong nhà, shop bán đồ trang trí decor
                  phòng khách, phòng ngủ, giá rẻ nhất thị trường, sản phẩm đa
                  dạng độc đáo
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div
                className="container cart_content"
                style={{ width: "360px", height: "300px" }}
              >
                <a>
                  <img
                    src="image/Cake/cake4.jpg"
                    alt=""
                    className="imageShow"
                  />
                </a>
                <p>
                  Tổng hợp loại bánh làm bằng bột mì hay bột gạo có hương vị
                  ngọt, mặn, béo...có thể hấp, nướng, chiên
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        {/* Line1 */}
        <div className="title-line">
          <h2>Dịch vụ đồ ăn</h2>
        </div>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
              marginLeft: "180px",
              width: "85%",
              marginTop: "40px",
              paddingBottom: "40px",
            }}
          >
            {this.state.categories2.map((cates, index) => (
              <div>
                <div>
                  <Link to={"/productdetail/" + cates.id}>
                    <img
                      className="imageShow"
                      src={cates.picture}
                      controls
                    ></img>
                  </Link>
                  <h4 style={{ paddingLeft: "70px", paddingBottom: "40px" }}>
                    {cates.name_product}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Line2 */}
        <div className="title-line">
          <h2>Dịch vụ loa máy</h2>
        </div>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
              marginLeft: "180px",
              width: "85%",
              marginTop: "40px",
              paddingBottom: "40px",
            }}
          >
            {this.state.categories1.map((cate1, index) => (
              <div>
                <div>
                  <Link to={"/productdetail/" + cate1.id}>
                    <img
                      className="imageShow"
                      src={cate1.picture}
                      controls
                    ></img>
                  </Link>
                  <h4 style={{ paddingLeft: "70px", paddingBottom: "40px" }}>
                    {cate1.name_product}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Line3 */}
        <div className="title-line">
          <h2>Dịch vụ trang trí</h2>
        </div>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
              marginLeft: "180px",
              width: "85%",
              marginTop: "40px",
              paddingBottom: "40px",
            }}
          >
            {this.state.categories3.map((cate3, index) => (
              <div>
                <div>
                  <Link to={"/productdetail/" + cate3.id}>
                    <img
                      className="imageShow"
                      src={cate3.picture}
                      controls
                    ></img>
                  </Link>
                  <h4 style={{ paddingLeft: "70px", paddingBottom: "40px" }}>
                    {cate3.name_product}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* line4 */}
        <div className="title-line">
          <h2>Dịch vụ bánh kem</h2>
        </div>
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
              marginLeft: "180px",
              width: "85%",
              marginTop: "40px",
              paddingBottom: "40px",
            }}
          >
            {this.state.categories4.map((cate4, index) => (
              <div>
                <div>
                  <Link to={"/productdetail/" + cate4.id}>
                    <img
                      className="imageShow"
                      src={cate4.picture}
                      controls
                    ></img>
                  </Link>
                  <h4 style={{ paddingLeft: "70px", paddingBottom: "40px" }}>
                    {cate4.name_product}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Service;
