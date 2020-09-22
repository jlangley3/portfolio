import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import '../styles/Nav.css';


class NavBar extends Component {
    render() {
        return ( 
               <ul>
                    <Link to="/home">HOME</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                </ul>
              )}       
}







export default NavBar

