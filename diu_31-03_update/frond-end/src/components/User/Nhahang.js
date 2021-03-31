import React, { Component } from 'react';
import { 
    Link } 
  from "react-router-dom";
class Nhahang extends Component{
  constructor(){
    super();
    this.state = {
      vendor: []
    }     
    this.getVendor();
    }
    getVendor(){
      fetch("http://127.0.0.1:8000/api/nhahang")
      .then(response => {
        response.json().then((data) =>{
            console.log(data);
            this.setState({
                vendor: data 
            })
        });
      });
    }
  render() {
    return (
      <div><h2>List Vendors</h2>
        <div>
          <div style={{ display: "grid", gridTemplateColumns: "auto auto auto auto", marginLeft: "180px", width: "85%", marginTop: "40px", paddingBottom: "40px"}} >
            {this.state.vendor.map((vendors,index)=>
              <div >
                <div>
                  <Link to={ '/vendordetail/' + vendors.id}><img className="imageShow" src={vendors.avatar} controls alt=""></img></Link>
                  <h4 style={{paddingLeft: "70px", paddingBottom: "40px"}}>{vendors.fullname}</h4>
                </div>
              </div>
            )}   
          </div>
        </div>
      </div>
    );
  }
}
export default Nhahang;