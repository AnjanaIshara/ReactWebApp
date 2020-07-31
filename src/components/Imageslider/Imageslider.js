import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import img1 from '../../ImageSlider Images/image1.jpg';//Import the images from the ImageSlider Images which is in src->components
import img2 from '../../ImageSlider Images/image2.jpg';
import img3 from '../../ImageSlider Images/image3.jpg';

class Imageslider extends Component {
    render() {
        return (

            <Carousel>
                <Carousel.Item>
                    <img class="d-block img-fluid mx-auto" src={img1} alt="Firstimage" ></img>

                    <Carousel.Caption>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        Capitalize on low hanging fruit to identify a ball park value added
                        activity set. Override the digital divide with additional clickthroughs Capitalize on low hanging fruit
                         to identify a ballpark value added activity test<br></br>
                        <Button variant="primary">GET STARTED</Button>{'   '}
                        <Button variant="outline-primary">LEARN MORE</Button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img class="d-block img-fluid mx-auto" src={img2} alt="Secondimage"></img>
                    <Carousel.Caption>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        Capitalize on low hanging fruit to identify a ball park value added
                        activity set. Override the digital divide with additional clickthroughs Capitalize on low hanging fruit
                         to identify a ballpark value added activity test<br></br>
                        <Button variant="primary" >GET STARTED</Button>{'   '}
                        <Button variant="outline-primary" >LEARN MORE</Button>


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img class="d-block img-fluid mx-auto" src={img3} alt="Thirdimage"></img>
                    <Carousel.Caption>
                        <h1>Lorem ipsum dolor sit amet</h1>
                        Capitalize on low hanging fruit to identify a ball park value added
                        activity set. Override the digital divide with additional clickthroughs Capitalize on low hanging fruit
                         to identify a ballpark value added activity test<br></br>
                         <Button variant="primary">GET STARTED</Button>{'   '}
                         <Button variant="outline-primary">LEARN MORE</Button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        );
    }
}
export default Imageslider