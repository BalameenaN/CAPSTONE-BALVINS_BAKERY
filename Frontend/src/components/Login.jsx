import Nav from './Nav'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//component for login page
export default function Login() {
    const pwdRef = useRef();
    const emailRef = useRef();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function submitHandle(e) {
        e.preventDefault();

        const data = {
            Email: emailRef.current.value,
            Password: pwdRef.current.value

        };

        try {
            console.log("inside login-try");
            //details from login form is send to the login API for validation
            const response = await fetch('http://localhost:8080/user/login', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();
            //console.log(result);
            if (result == "success") {

                navigate('/');
            }
            else {
                setError(result);
            }

        } catch (e) {

            console.log(e);
        }

    }

    return (
        <>
            <Nav />
            <h1 style={{ textAlign: 'center', color: 'brown' }}> Login to your account to place orders!</h1>
            <fieldset className='fieldset-container'><h3 style={{ marginTop: '5px' }}>Login</h3>
                <form className='form-container' onSubmit={submitHandle}>
                    <label>Email:
                        <input ref={emailRef} type='text' required />
                    </label><br />
                    <label>Password:
                        <input ref={pwdRef} type='password' required />
                    </label><br />
                    <button>Login</button>
                </form>
            </fieldset><br />
            <h2 style={{ textAlign: 'center', marginTop: '10px' }}>Do not have account?Signup <Link to='/signup'>HERE</Link></h2>
            {/*conditional rendering of error message if the username/password is incorrect*/}
            {error && <h5 style={{ textAlign: 'center', color: 'red' }} >Incorrect username or password</h5>}
            <footer style={{ alignItems: 'end', position: 'absolute', bottom: '0' }}>
                &copy; 2025 baalvinbakery. All rights reserved.
            </footer>
        </>
    )
}