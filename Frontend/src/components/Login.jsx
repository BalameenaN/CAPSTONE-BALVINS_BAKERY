import Nav from './Nav'
import { useRef } from 'react';
import {Link} from 'react-router-dom';

export default function Login() {
    const nameRef = useRef();
    const emailRef = useRef();

    return (
        <>
            <Nav />
            <h1 style={{ textAlign: 'center', color: 'brown' }}> Login to your account to place orders!</h1>
            <fieldset className='fieldset-container'><h3>Login</h3>
                <form className='form-container'>
                    <label>Name:
                        <input ref={nameRef} type='text' />
                    </label><br />
                    <label>Email:
                        <input ref={emailRef} type='text' />
                    </label><br />
                    <label>Password:
                        <input type='text' />
                    </label><br />
                    <button>Login</button>
                </form>
            </fieldset>
            <h2 style={{ textAlign: 'center' }}>Do not have account?Signup <Link  to='/signup'>HERE</Link></h2>
            <footer style={{alignItems:'end', position: 'absolute', bottom: '0' }}>
            &copy; 2025 baalvinbakery. All rights reserved.
         </footer>
        </>
    )
}