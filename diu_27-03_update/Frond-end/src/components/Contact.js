import React, { Component } from 'react';
import "./Contact.css";
class Contact extends Component{
  render() {
    return (
      <div>
        <div className="flex-container">
          <div style={{ flexGrow: "3"}} className="left-box">
            <div style={{display: "flex" }}>
              <div>
                <i className="fas fa-address-card"></i>
              </div>
              <div className="infor">
                <h4 style={{fontWeight: "bold", color: "black"}}>Quản trị viên</h4>
                <h4>Hồ Văn Quân</h4>
                <h4>Nguyễn Thị Tiên</h4>
                <h4>Hoàng Thị Dịu</h4>
                <h4>Trần Thị Huyền Trang</h4>
              </div>
            </div>
            <div style={{display: "flex" }}>
              <div>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="infor">
                <h4 style={{fontWeight: "bold", color: "black"}}>Địa chỉ</h4>
                <h4>101 Lê Hữu Trác, Phước Mỹ, Sơn Trà, Đà Nẵng</h4>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <i className="fas fa-envelope-open-text"></i>
              </div>
              <div className="infor">
                <h4 style={{fontWeight: "bold", color: "black"}}>Email</h4>
                <h4>queenparty@gmail.com</h4>
              </div>
            </div>
            <div style={{display: "flex" }}>
              <div>
                <i className="fas fa-phone"></i>
              </div>
              <div className="infor">
                <h4 style={{fontWeight: "bold", color: "black"}}>Số điện thoại</h4>
                <h4>(+84) 657 847 676</h4>
              </div>
            </div>
            <div>
              <img src="image/a.jpg" style={{ width: "300px" }}></img>
            </div>
          </div>
          <div style={{ flexGrow: "7" }}>
            <h3>Liên hệ</h3>
            <div className="contact-form">
              <h4>Tên của bạn</h4>
              <input placeholder="Nguyen Van A"></input>
              <h4>Email</h4>
              <input placeholder="nguyenvana@gmail.com"></input>
              <h4>Lời nhắn</h4>
              <textarea placeholder="Bạn có lời nhắn gì đến chúng tôi?"></textarea>
              <div></div><button>Gửi</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;