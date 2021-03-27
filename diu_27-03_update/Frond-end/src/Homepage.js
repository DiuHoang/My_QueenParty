import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
  Link } 
from "react-router-dom";
import { Component } from 'react';
import './App.css';
import Service from "./components/Service";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Nhahang from "./components/User/Nhahang";

class Homepage extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
        </div>
        <Switch>
          <Route path='/' exact>
            <Service/>
          </Route>
          <Route path='/nhahang'>
            <Nhahang />
          </Route>
          <Route path='/lienhe'>
            <Contact />
          </Route>
        </Switch>
        <div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Homepage;
