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
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/2_enCjVPRtM?rel=0" 
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='Car Facts video'
                    />
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/fGRfg76xeHg?rel=0" 
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='Bootcamp video'
                    />
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/wYSYQiH26zk?rel=0" 
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='Artist is Like video'
                    />
                </div>
              )}       
}


{/* allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen
title='video'> */}



export default Projects

