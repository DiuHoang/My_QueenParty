import React, { Component } from 'react';
import "./Payment.css";
import {withRouter} from 'react-router';
class Payment extends Component {
  render() {
    
    return (
      <div>
          <div className="contain">
      <div className="flex-PM">
        <div>Giá trị đơn hàng </div>
        <div>Phí giao dịch </div>
        <div>Thành tiền </div>
      </div>
      <hr className="gach" />
      {/*  */}
      <div className="flex-PM">
        <div>
          630.000 <span>VNĐ</span>
        </div>
        <div>Miễn phí</div>
        <div>
          <b>
            630.000 <span>VNĐ</span>
          </b>
        </div>
      </div>
      {/*  */}

      <div className="enter">
        <div className="flex">
          <div>
            <img className="banner" src="./image/shippinh.png" />
            <br />
            <i className="queen-payment">Queen Party</i>
            <p className="moTa">
              ✳️ Giao hàng nhanh chóng <br />
              ✳️ Dịch vụ đa dạng nhất <br /> ✳️ Đồng hành cùng bạn{" "}
            </p>
            <br />
          </div>
          <div className="khungPayment">
            <div className="flexKhung1">
              <div>
                <div className="margin">Tên của bạn</div>
                <div className="margin">Địa chỉ</div>
                <div className="margin">Số điện thoại</div>
                <div className="margin">Thời gian giao</div>
                <div className="margin">Ghi chú</div>
              </div>

              <div>
                <b>
                  <div className="margin">Nguyễn Thị Tiên</div>
                  <div className="margin">Lê Hữu Trác</div>
                  <div className="margin">0776650195</div>
                  <div className="margin">2:00pm 20/2/1021</div>
                  <div className="margin">
                    Đúng giờ hộ em, không thích chờ đợi đâu
                  </div>
                </b>
              </div>
            </div>
          </div>
          <div className="payment1">
            <p className="flex-img">
              <img
                src="https://i.imgur.com/28akQFX.jpg"
                width="200px"
                height="100px"
              />
              <img
                src="https://i.imgur.com/5QFsx7K.jpg"
                width="200px"
                height="100px"
              />
            </p>
            <p className="ma">
              <b>Phương thức thanh toán</b>
            </p>
            <p className="flexRadio">
              <input
                type="radio"
                id="huey"
                name="drone"
                value="tructiep"
                checked
              />{" "}
              Thanh toán trực tiếp
              <br />
            </p>
            <p className="flexRadio">
              <input
                type="radio"
                id="huey"
                name="drone"
                value="tindung"
                checked
              />
              Thanh toán thẻ tín dụng
              <br />
            </p>
          </div>
        </div>
        <button type="submit" className="btn-payment"><b>
          Tiếp tục
        </b></button>
      </div>
    </div>
      </div>
    );
  }
}
export default withRouter(Payment);