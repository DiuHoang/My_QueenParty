import React, { Component } from "react";
import "./InterfaceVendor.css";
import { Link } from "react-router-dom";
class HeaderVendor extends Component {
  render() {
    return (
      <div>
        {/* heder vendor */}
        <div className="vendor_header">
          <div>
            <Link to={"/vendor"}>
              <img className="logo_header" src="image/logo.png"></img>
            </Link>
          </div>
          <div className="horizontal-menu" style={{ marginTop: "25px" }}>
            <nav>
              <ul id="nav_menu">
                <li className="active">
                  <a href="javascript:void(0)">
                    <i className="ti-dashboard"></i>
                    <span>Tổng quan</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="ti-layout-sidebar-left"></i>
                    <span>Doanh thu tháng</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="ti-pie-chart"></i>
                    <span>Đơn hàng</span>
                  </a>
                </li>
                <li className="mega-menu">
                  <a href="javascript:void(0)">
                    <i className="ti-palette"></i>
                    <span>Hộp thư</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex-icon">
            <button className="icon-header">
              <i class="fa fa-bell" aria-hidden="true"></i>
            </button>
            <button className="icon-header">
              <i class="fa fa-cog" aria-hidden="true"></i>
            </button>
          </div>
          {/*  */}
          <div className="top-right">
            <div className="top-right-right">
              <img
                src="image/food_item/restaurant1.png"
                style={{ marginTop: "-5px" }}
              ></img>
              <div className="dropdown">
                <button
                  style={{
                    marginLeft: "-20px",
                    fontSize: "17px",
                    border: "none",
                    width: "160px",
                    height: "40px",
                    backgroundColor: " #eaa28b",
                    marginTop: "4px",
                  }}
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <b className="res-hover">Nhà hàng Cua Biển</b>
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                </button>
                {/*  */}
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{
                    width: "240px",
                    marginLeft: "-55px",
                    height: "160px",
                  }}
                >
                  <a className="dropdown-item" href="#">
                    <i class="fa fa-user-circle" aria-hidden="true"></i> Trang
                    cá nhân
                  </a>
                  <br></br>
                  <a
                    className="dropdown-item"
                    href="/showVendor"
                    style={{ textDecoration: "none" }}
                  >
                    <i class="fa fa-newspaper-o" aria-hidden="true"></i> Cập
                    nhật thực đơn
                  </a>
                  <br></br>
                  <a className="dropdown-item" href="#">
                    <i class="fa fa-reply" aria-hidden="true"></i> Quay lại
                  </a>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-vendor-header" />
      </div>
    );
  }
}
export default HeaderVendor;
