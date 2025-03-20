import Nav from './Nav'
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../App';

//component for signup page
export default function Signup() {

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const pwdRef = useRef();
    const addrRef = useRef();

    const [isRegistered, setIsRegisterd] = useState(false); //state to check if the registration is successful
    const [isUserExist, setIsUserExist] = useState(false); //state to check if the given email Id is already registered


    async function submitHandle(e) {
        e.preventDefault();

        const data = {
            Name: nameRef.current.value,
            Phone: phoneRef.current.value,
            Email: emailRef.current.value,
            Password: pwdRef.current.value,
            Address: addrRef.current.value
        }

        try {
            //sending the details given by user for validation in the backend
            const response = await fetch(`${BASE_URL}/user/signup`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            //console.log(result, "result");
            if (result == 'success') {
                setIsRegisterd(true);
                setIsUserExist(false);
            } else {
                setIsUserExist(true);
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <Nav />
            {isRegistered ? <><h2 style={{ textAlign: 'center', marginTop: '200px', color: 'red' }}>Registration is successful</h2>
                <h5 style={{ textAlign: 'center' }}>Login in <Link to='/login'>HERE</Link> to continue exploring our products</h5>
            </> : <>
                <h1 style={{ textAlign: 'center', color: 'brown' }}> Registration page</h1>
                <fieldset className='fieldset-container' style={{ width: '400px' }}><h4 style={{ marginTop: '5px' }}>Registration form</h4>
                    <form className='form-container' onSubmit={submitHandle}>
                        <label>Name:
                            <input ref={nameRef} type='text' />
                        </label><br />
                        <label>Email:
                            <input ref={emailRef} type='email' />
                        </label><br />
                        <label>Phone:
                            <input ref={phoneRef} type='number' />
                        </label><br />
                        <label>Password:
                            <input ref={pwdRef} type='password' />
                        </label><br />
                        <label>Address:
                            <input ref={addrRef} type='text' />
                        </label><br />
                        <button style={{ margin: '6px' }}>Register</button>
                    </form>
                </fieldset>
            </>
            }<br />
            {/*conditional rendering of error message if the given emailID is already registered*/}
            {isUserExist && <h4 style={{ textAlign: 'center', color: 'red' }} >Given Email is already registered</h4>}
            <footer style={{ alignItems: 'end', position: 'absolute', bottom: '0' }}>
                &copy; 2025 balvinbakery. All rights reserved.
            </footer>
        </>
    )
}