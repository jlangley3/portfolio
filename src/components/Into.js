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

                        <h1>3.</h1><h2>Mirror</h2>
  
     <a href={"https://www.mirror.co/shop/mirror?utm_source=google_ads&utm_medium=google_shopping&utm_campaign=mirror_shopping"}>  <img src="https://res.cloudinary.com/themirror/w_480,c_scale,f_auto,q_auto/ecom/production/2019/11/22/19/40/34/34a7eb2a-95b7-451d-90a5-bcf58f352f6d/190910_Mirror_01_2672_02_WIP_297x297.jpg" alt="Italian Trulli"></img></a>
 

                   <p>
                       Due to the pandemic fitness companies had a big rise in popularty and cash. Tonal was a start up with a smart wall mounted display and ditital weights raised $110, 000, 000 to help it meet the demand. and Lululemon paided over 500, 000, 00 to aquire mirror a company that builds mirros with buillt in dsiplays that guide workouts. 
                        </p>

                        <h1>4.</h1><h2>Playstation 5</h2>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/FXYTaLFoIF4?rel=0"
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='Playstation'
                    />
                   <p>
                       Notes about Why I'm into it
                        </p>

                        <h1>5.</h1><h2>Elgato Microphone</h2>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/_mLyLh7cN2s?rel=0"
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='Elgato'
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

