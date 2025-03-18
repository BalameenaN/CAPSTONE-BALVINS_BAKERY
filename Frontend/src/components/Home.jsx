import Nav from './Nav.jsx'
import AppCarousel from './Appcarousel';
import '../App.css'
import Category from './Category.jsx';


export default function Home() {
    console.log("inside Home");
    return (
        <>
            <Nav />
            <AppCarousel />
            <Category />
            <div className='contact-container'>
            <h3>Contact Us</h3>
            <p>Whether you’re craving freshly baked goodness delivered to your doorstep or planning to visit us in person, we’re here for you!</p>
            <h3>📍 Store Location</h3>
            <p>Balvin's Bakery, 123 Sweet Street, Baking Town, CO 12345</p>
            <h5>Step into a world of heavenly aromas and delightful treats.</h5>
            <h3>☎️ Phone</h3>
            <p>Call us for quick assistance or to place an order:</p><h6>(555) 123-4567</h6>
            <h3>💻 Order Online</h3>
            <p>Visit our website to order your favorites and enjoy fast delivery: www.balvinsbakery.com</p>
            <h5>Got a sweet tooth emergency? We’re just a call away!</h5>
            <h3>✉️ Email Us</h3>
            <p>For inquiries, custom orders, or feedback:</p><h6>hello@balvinsbakery.com</h6>
            <h5>Your thoughts matter to us, just like the perfect recipe!</h5>
            </div>
        </>
    )
}