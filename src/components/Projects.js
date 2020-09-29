import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';



class Projects extends Component {
    render() {
        return ( 
                <div>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/IL3Uz5mYQ6A?rel=0" 
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           frameborder="10312424"
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
                           title='gift lister video'
                    />
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/wYSYQiH26zk?rel=0" 
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='gift lister video'
                    />
                  
                </div>
              )}       
}


{/* allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen
title='video'> */}



export default Projects

