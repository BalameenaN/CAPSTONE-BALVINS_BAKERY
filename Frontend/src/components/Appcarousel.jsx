import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import img1 from '../../image/carousel1.jpg'
import img2 from '../../image/carousel2.jpg'
import img3 from '../../image/carousel3.jpg'
import '../App.css'

//using bootstrap carousel for displaying the images in home page
const AppCarousel = () => {
    return (
        <div className="centered-carousel" >
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First Slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'white' }}>Welcome to Balvin's Bakery</h3>
                        <p style={{ color: 'white' }}>Freshly home-baked goodness</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className='d-block w-100 '
                        src={img2}
                        alt="Second Slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'white' }}>Enjoy a 50% discount on purchases over $50</h3>
                        <p style={{ color: 'white' }}>Offer available in all the products</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={img3}
                        alt="Third Slide"
                    />
                    <Carousel.Caption>
                        <h3 style={{ color: 'white' }}>Order online and savor our product wherever you are.</h3>
                        <p style={{ color: 'white' }}>Freshly baked cake are available during the day time</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default AppCarousel;