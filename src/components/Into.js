import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import '../styles/Into.css';


class Into extends Component {
    render() {
        return ( 
                <div className="videos">
                        <h1>Things I am Into!</h1>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/IL3Uz5mYQ6A?rel=0" 
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='gift lister video'
                    />
                   <p>
                        Link to Front-end: <a href={"https://github.com/jlangley3/gift_list_frontend"}>Front-End </a> 
                        <span>{"  &  "} </span>
                        Link to Back-end: <a href={"https://github.com/jlangley3/gift_list_backend"}>Back-End</a>
                        </p>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/2_enCjVPRtM?rel=0" 
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='Car Facts video'
                    />
                    <p>
                        Link to Front-end: <a href={"https://github.com/jlangley3/react_car_forum"}>Front-End</a>
                        <span>{"  &  "} </span> 
                        Link to Back-end: <a href={"https://github.com/agdsarge/rails-car-forum"}>Back-End</a>
                        </p>

                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/fGRfg76xeHg?rel=0" 
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='Bootcamp video'
                    />
                    <p>
                        Link to Front-end: <a href={"https://github.com/jlangley3/bootcamp_fitness-frontend"}>Front-End</a> 
                        <span>{"  &  "} </span> 
                        Link to Back-end: <a href={"hhttps://github.com/jlangley3/bootcamp-fitness-backend"}>Back-End</a>
                    </p>

                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/wYSYQiH26zk?rel=0" 
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='Artist is Like video'
                    />
                    <p>Link to Code: <a href={"https://github.com/mertoz41/artist-is-like"}>GitHub</a></p>
                </div>
              )}       
}


{/* allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen
title='video'> */}



export default Into

