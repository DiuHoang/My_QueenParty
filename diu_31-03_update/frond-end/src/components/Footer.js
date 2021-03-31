import React, { Component } from 'react';
import "./Footer.css";
class Footer extends Component{
  render(){
    return(
        <div className="footerSpace">
          <div>
            <img src="./image/logo.png" alt="" width="150px" height="150px"/>
            <p>QueenParty</p>
            <p>Ứng dụng đặt tiệc tại nhà</p>
          </div>
        
          <div>
            <div>
              <i className="fas fa-home">Địa chỉ</i>
              <p>101B Lê Hữu Trác</p>
              <p>Thành phố Đà Nẵng</p>
              <p>Việt Nam</p>
            </div><br></br>
            <div>
              <i className="fas fa-phone">Liên hệ</i>
              <p>Email:[queenpartycom.vn]</p>
              <p>Phone:(+84)090567432</p>
              <p>Fax:(+84)077684219</p>
            </div>
          </div>
          <div>
            <div>
              <i className="fas fa-calculator">Hệ thống</i>
              <p style={{color: "#004fd9"}}>Giao hàng tận nhà</p>
              <p style={{color: "#004fd9"}}>Nhanh chóng & an toàn</p>
              <p style={{color: "#004fd9"}}>Đáp ứng mọi yêu cầu</p>
            </div><br></br>
            <div>
              <i className="far fa-comment-dots">Phản hồi</i>
              <p>Xin vui lòng gửi chúng tôi ý tưởng của bạn,sẽ được đánh giá cao.</p>
            </div>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7668.41304705934!2d108.23924267454373!3d16.054769305559233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1615276754112!5m2!1svi!2s" width="440" height="240" style={{border:0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        <hr style={{color: "#eaa28b" }}/> 
      </div>
    );
  }
}
export default Footer;  