import React from 'react';
import PropTypes from 'prop-types';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom' 


export default function Navbar(props) {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
   
        {/* <Route path='' component={Home}/>
        <Route path='/' component={}/>
        <Route path='/Contact' component={Contact} /> */}
    
        {/* <link to=""></link>
        <link to="/"></link>
        <link to="/Contact"></link> */}
       

      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  );
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    abouttxt: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Blogger",
    abouttxt: " Us"
}