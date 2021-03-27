import React, { Component } from 'react';
import "../Contact.css";
import { 
    Link } 
  from "react-router-dom";
import {withRouter} from 'react-router';
class NhahangDetail extends Component {
    constructor(props){
      super(props);
      this.state = {
        vendordetail: [],
        productVendorDetail: []
      }
      var id = props.match.params.id;
      this.getDetail(id);
      this.getProductVendorDetail(id);
    }
    
    getDetail(id){
      fetch("http://127.0.0.1:8000/api/nhahang/detail/" + id)
      .then(response => {
        response.json().then((data) =>  {
            console.log(data);
            this.setState({
                vendordetail:data
            })
        });
      });
    }
    getProductVendorDetail(id){
      fetch("http://127.0.0.1:8000/api/nhahang/detailProductVendor/" + id)
      .then(response => {
        response.json().then((data) =>  {
            console.log(data);
            this.setState({
                productVendorDetail:data
            })
        });
      });
    }
  render() {
    var { vendordetail } = this.state;
    return (
      <div>
        {/* display vendor detail */}
        <div className="flex-container">
          <div style={{ flexGrow: "3"}} className="left-box">
            <div>
              <img style={{height: "250px"}} src={'/'+ this.state.vendordetail.avatar} controls ></img>
            </div>
          </div>
          <div style={{ flexGrow: "7", padding: "20px" }} >
            <div>
              <div style={{ display: "flex" }}>
                <h4>Ten nha hang:  </h4>
                <h4 style={{fontWeight: "bold", marginLeft: "10px"}}>{this.state.vendordetail.fullname}</h4>
              </div>
              <div style={{ display: "flex" }}>
                <h4>Sdt nha hang: </h4>
                <h4 style={{fontWeight: "bold", marginLeft: "10px"}}>{this.state.vendordetail.phonenumber}</h4>
              </div>
              <div style={{ display: "flex" }}>
                <h4>Dia chi nha hang: </h4>
                <h4 style={{fontWeight: "bold", marginLeft: "10px"}}>{this.state.vendordetail.address}</h4>
              </div>
              <div style={{ display: "flex" }}>
                <h4>Email nha hang: </h4>
                <h4 style={{fontWeight: "bold", marginLeft: "10px"}}>{this.state.vendordetail.email}</h4>
              </div>
              <div style={{ display: "flex" }}>
                <h4>Thoi gian mo cua: </h4>
                <h4 style={{fontWeight: "bold", marginLeft: "10px"}}>{this.state.vendordetail.open_time}</h4>
              </div>
              <div style={{ display: "flex" }}>
                <h4>Mo ta: </h4>
                <h4 style={{fontWeight: "bold", marginLeft: "10px"}}>{this.state.vendordetail.description}</h4>
              </div>
            </div>
          </div>
        </div>
        {/* display product from vendor */}
        <div>
          <h2>Nhung san pham co trong nha hang</h2>
          <div>
          <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto", marginLeft: "180px", width: "85%", marginTop: "40px", paddingBottom: "40px"}} >
            {this.state.productVendorDetail.map((vendorproduct,index)=>
              <div >
                <div>
                  <Link to={ '/vendordetail/' + vendorproduct.id}><img className="imageShow" src={'/'+ vendorproduct.picture} controls alt=""></img></Link>
                  <h4 style={{paddingLeft: "70px", paddingBottom: "40px"}}>{vendorproduct.name_product}</h4>
                </div>
              </div>
            )}   
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NhahangDetail);