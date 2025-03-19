import logo from '../../image/logo1.png'
import { Link } from 'react-router-dom'
import Home from './Home.jsx'

//header component for each page and links to different page
export default function Nav() {
    console.log("inside Nav");
    return (
        <>
            <nav>
                <div className='nav-container'>
                    <div>
                        <img className='nav-img' src={logo} />
                    </div>
                    <Link className='nav-btn' to='/cart'>Cart</Link>
                    <div className='nav-bar'>
                        <Link className='link' to='/'>
                            <h3>Home</h3>
                        </Link>
                        <Link className='link' to='/product'>
                            <h3>Product</h3>
                        </Link>
                        <Link className='link' to='/kids'>
                            <h3>Kids Special</h3>
                        </Link>
                        <Link className='link' to='/login'>
                            <h3>Login</h3>
                        </Link>
                    </div>
                </div>
            </nav>


        </>
    )
}