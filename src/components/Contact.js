import React, {Component} from 'react';
import { Link, withRouter } from "react-router-dom";
import con from '../images/contact.jpg';
import '../styles/Contact.css';


class Contact extends Component{

    render(){
       return (
   
      <div>
          <Link as="a" activeClassName="active" to="/Contact"><img src={con} className="githubIcon" /></Link>
            <p className="title">Contact Page</p>
            <a href={"https://www.mirror.co/shop/mirror?utm_source=google_ads&utm_medium=google_shopping&utm_campaign=mirror_shopping"}>  
     <img src="https://images.lululemon.com/is/image/lululemon/1_1_lg_Masonry_D%20Hero?$masonry_grid$&wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
     alt="Italian Trulli" width="900px" height="600px"></img></a>
            <p className="title">Linkedin</p>
            <a href={"https://www.mirror.co/shop/mirror?utm_source=google_ads&utm_medium=google_shopping&utm_campaign=mirror_shopping"}>  
     <img src="https://images.lululemon.com/is/image/lululemon/1_1_lg_Masonry_D%20Hero?$masonry_grid$&wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
     alt="Italian Trulli" width="900px" height="600px"></img></a>
            <p className="title">Email</p>
            <a href={"https://www.mirror.co/shop/mirror?utm_source=google_ads&utm_medium=google_shopping&utm_campaign=mirror_shopping"}>  
     <img src="https://images.lululemon.com/is/image/lululemon/1_1_lg_Masonry_D%20Hero?$masonry_grid$&wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
     alt="Italian Trulli" width="900px" height="600px"></img></a>
            <p className="title">Blog</p>
            <a href={"https://www.mirror.co/shop/mirror?utm_source=google_ads&utm_medium=google_shopping&utm_campaign=mirror_shopping"}>  
     <img src="https://images.lululemon.com/is/image/lululemon/1_1_lg_Masonry_D%20Hero?$masonry_grid$&wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
     alt="Italian Trulli" width="900px" height="600px"></img></a>

<p className="title">Blog</p>
            <a href={"https://www.mirror.co/shop/mirror?utm_source=google_ads&utm_medium=google_shopping&utm_campaign=mirror_shopping"}>  
     <img src="https://images.lululemon.com/is/image/lululemon/1_1_lg_Masonry_D%20Hero?$masonry_grid$&wid=2420&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72" 
     alt="Italian Trulli" width="900px" height="600px"></img></a>


      </div>
    
  )   
    }

} 



export default Contact