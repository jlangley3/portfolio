import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import '../styles/Nav.css';


class NavBar extends Component {
    render() {
        return ( 
               <div className="nav">
                    <Link as="a" activeClassName="active" to="/">HOME</Link>
                    <Link as="a" activeClassName="active" to="/about">About</Link>
                    <Link as="a" activeClassName="active" to="/projects">Projects</Link>
                </div>
              )}       
}







export default NavBar

