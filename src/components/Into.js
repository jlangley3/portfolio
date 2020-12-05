import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import '../styles/Into.css';


class Into extends Component {
    render() {
        return ( 
                <div className="videos">
                        <h1>Things I am Into!</h1>

                        <h1>1.</h1><h2>Apple Silicon Mac's</h2>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/f4g2nPY-VZc?rel=0"
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='M1'
                    />
                   <p>
                       Notes about Why I'm into it
                        </p>


                        <h1>2.</h1><h2>Subaru BRZ</h2>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/aJnEQf6DzkU?rel=0"
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='BRZ'
                    />
                   <p>
                       Notes about Why I'm into it
                        </p>

                        <h1>3.</h1><h2>Apple Silicon Mac's</h2>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/f4g2nPY-VZc?rel=0"
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='gift lister video'
                    />
                   <p>
                       Notes about Why I'm into it
                        </p>

                        <h1>4.</h1><h2>Apple Silicon Mac's</h2>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/f4g2nPY-VZc?rel=0"
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='gift lister video'
                    />
                   <p>
                       Notes about Why I'm into it
                        </p>

                        <h1>5.</h1><h2>Apple Silicon Mac's</h2>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/f4g2nPY-VZc?rel=0"
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='gift lister video'
                    />
                   <p>
                       Notes about Why I'm into it
                        </p>
                </div>
              )}       
}


{/* allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
allowfullscreen
title='video'> */}



export default Into

