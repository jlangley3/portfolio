import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import '../styles/Projects.css';


class Projects extends Component {
    render() {
        return ( 
                <div className="videos">
                        <h1>These are Demos of my Latest Projects</h1>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/IL3Uz5mYQ6A?rel=0" 
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='gift lister video'
                    />

                    <ul>
                        <li>Link to Front-end: <a href={"https://github.com/jlangley3/gift_list_frontend"}>GitHub</a></li>
                        <li>Link to Back-end: <a href={"https://github.com/jlangley3/gift_list_backend"}>GitHub</a></li>
                    </ul>

                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/2_enCjVPRtM?rel=0" 
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='Car Facts video'
                    />
                   <ul>
                        <li>Link to Front-end: <a href={"https://github.com/jlangley3/react_car_forum"}>GitHub</a></li>
                        <li>Link to Back-end: <a href={"https://github.com/agdsarge/rails-car-forum"}>GitHub</a></li>
                   </ul>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/fGRfg76xeHg?rel=0" 
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='Bootcamp video'
                    />
                   <ul>
                        <li>Link to Front-end: <a href={"https://github.com/jlangley3/bootcamp_fitness-frontend"}>GitHub</a></li>
                        <li>Link to Back-end: <a href={"hhttps://github.com/jlangley3/bootcamp-fitness-backend"}>GitHub</a></li>
                   </ul>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/wYSYQiH26zk?rel=0" 
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='Artist is Like video'
                    />
                   <ul>
                        <li>Link to Code: <a href={"https://github.com/mertoz41/artist-is-like"}>GitHub</a></li>
                   </ul>
                </div>
              )}       
}


{/* allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen
title='video'> */}



export default Projects

