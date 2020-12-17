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
                       This is big. ARM vs x86 has always been a fun debate for me and Apple may be the compnay to push the next generation of computers forward.
                        </p>


                        <h1>2.</h1><h2>Subaru BRZ</h2>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/aJnEQf6DzkU?rel=0"
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='BRZ'
                    />
                   <p>
                       My all time favorite car. Its not about power for me its about handling and fun. This car is all of that. It hugs me and the road at the sametiem and I cant ask for more from a a car. 
                        </p>

                        <h1>3.</h1><h2>Mirror</h2>
  
     <a href={"https://www.mirror.co/shop/mirror?utm_source=google_ads&utm_medium=google_shopping&utm_campaign=mirror_shopping"}>  <img src="https://res.cloudinary.com/themirror/w_480,c_scale,f_auto,q_auto/ecom/production/2019/11/22/19/40/34/34a7eb2a-95b7-451d-90a5-bcf58f352f6d/190910_Mirror_01_2672_02_WIP_297x297.jpg" alt="Italian Trulli"></img></a>
 

                   <p>
                       Due to the pandemic fitness companies had a big rise in popularty and cash. Tonal was a start up with a smart wall mounted display and ditital weights raised $110, 000, 000 to help it meet the demand. and Lululemon paided over $500, 000, 000 to aquire mirror a company that builds mirros with built in displays that guide workouts. 
                        </p>

                        <h1>4.</h1><h2>Playstation 5</h2>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/FXYTaLFoIF4?rel=0"
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='Playstation'
                    />
                   <p>
                       Look everyone is into it. There are hard to find and they are expensive but everyone wants one. The controllers are what excite me the most. The next generation of gaming is right around the corner when ever I can afford it!
                        </p>

                        <h1>5.</h1><h2>Elgato Microphone</h2>
                   <iframe width="655" height="500" 
                           src="https://www.youtube.com/embed/_mLyLh7cN2s?rel=0"
                           allow="accelerometer; gyroscope; picture-in-picture" 
                           allowfullscreen
                           title='Elgato'
                    />
                   <p>
                       This is my mic, I love it and the loopback functionality is one of a kind. 
                        </p>



                </div>
              )}       
}





export default Into

