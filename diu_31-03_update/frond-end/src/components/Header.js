import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";
class Header extends Component{
  render(){
    return(
      <div className="headerI">
        <div className="top">
          <div style={{display: "flex", justifyContent: "space-around"}}>
            <div style={{display: "flex"}}>
              <i className="fas fa-phone">0967355235</i>
            </div>
            <div style={{display: "flex"}}>
              <i className="fas fa-envelope">QUEENPARTY@GMAIL.COM</i>
            </div>
          </div>
          <div style={{display: "flex"}}>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-skype"></i>
            <i className="fab fa-pinterest"></i>
            <Link to={'/cart/'}><i className="fas fa-shopping-cart"></i></Link>Đăng nhập
        </div>
        </div>
        <div style={{display: "flex", backgroundColor: "#ededed", justifyContent: "space-around"}} >
          <div style={{marginLeft: "10%"}}>
            <img src="/image/logo.png" width="100px" height="100px" alt=""/>
          </div>
          <div style={{display:"flex", margin: "auto"}}>
            <div>
              <i className="fas fa-home">Đà Nẵng</i>
            </div>
            <div>
              <i className="fas fa-car-side">24/24</i>
            </div>
            <div>
              <input type="text" placeholder="Nhập từ khóa"/><i className="fas fa-search"></i>
            </div>
          </div>
          <div style={{display:"flex", margin: "auto"}}>
              <a href="/"><p>Giới thiệu</p></a>
              <a href="/nhahang"><p>Nhà hàng & cửa hàng</p></a>
              <p>Dịch vụ</p>
              <a href="/lienhe"><p>Liên hệ</p> </a> 
          </div>
        </div>
      </div>
    );
  }
}
export default Header;