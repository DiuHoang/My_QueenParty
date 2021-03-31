import React, { Component } from "react";
import BarChart from "./BarChart";
import HeaderVendor from "./HeaderVendor";
import "./InterfaceVendor.css";
import LineChart from "./LineChart";
class InterfaceVendor extends Component {
  render() {
    return (
      <div className="include-page">
        {/* heder vendor */}
        <div>
          <HeaderVendor />
        </div>
        {/* Content Vendor */}
        <div className="row">
          <div className="col-8 col-s-9">
            {/* <!-- Thống kê hàng tháng --> */}
            <div>
              <h5>
                <b>Thống kê hàng tháng</b>
              </h5>
              <p>--------------------------------------</p>
              <div id="user-statistics">
                <LineChart />
              </div>
            </div>
          </div>
          <div className="col-4 col-s-12">
            <div className="aside">
              <h5>
                <b className="b-gach"> Thống kê doanh thu</b>
              </h5>
              <p className="h5-gach">--------------------------------</p>
              <div>
                <BarChart />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-vendor">
          {/* <!-- Đơn hàng gần đây --> */}
          <div>
            <h5>
              <b>Đơn hàng gần đây</b>
            </h5>
            <p>--------------------------------------</p>
          </div>
          <div>
            <table>
              <tr>
                <th>STT</th>
                <th>Sản phẩm</th>
                <th>Tổng giá</th>
                <th>Khách hàng</th>
                <th>Ngày đặt</th>
                <th>Địa điểm</th>
                <th>Thời gian</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default InterfaceVendor;
