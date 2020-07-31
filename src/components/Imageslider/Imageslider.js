import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../ImageSlider Images/image1.jpg';
import img2 from '../../ImageSlider Images/image2.jpg';
import img3 from '../../ImageSlider Images/image3.jpg';
class Imageslider extends Component{
    render(){
        return(
            <Carousel>
                
                <div>
                    <img src={img1}  alt="Image1"/>
                    
                </div>
                <div>
                    <img src={img2} alt="Image2" />
                    
                </div>
                <div>
                    <img src={img3} alt="Image3" />
                    
                </div>
            </Carousel>
                
        );
    }
}
export default Imageslider