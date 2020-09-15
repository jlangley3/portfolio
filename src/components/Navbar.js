import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import '../styles/Nav.css';


class NavBar extends Component {
    render() {
        return ( 
               <ul>
                    <li><a href="default.asp">Home</a></li>
                    <li><a href="projects.asp">Projects</a></li>
                    <li><a href="contact.asp">Contact</a></li>
                    <li><a href="about.asp">About</a></li>
                </ul>
              )}       
}







export default NavBar

