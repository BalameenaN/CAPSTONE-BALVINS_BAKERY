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
            
        </>
    )
}