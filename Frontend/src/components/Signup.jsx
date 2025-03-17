import Nav from './Nav'
import {useRef, useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

export default function Signup({user, setUser}){
  
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const pwdRef = useRef();
    const addrRef = useRef();
   
    const [isRegistered, setIsRegisterd] = useState(false);
    const [isUserExist, setIsUserExist] = useState(false);
   

    async function submitHandle(e){
        e.preventDefault();

       // const existingUser = user.find((u)=> u.Email == emailRef.current.value);
       /* if(!existingUser){*/
        const data = {
            Name : nameRef.current.value,
            Phone : phoneRef.current.value,
            Email : emailRef.current.value,
            Password : pwdRef.current.value,
            Address : addrRef.current.value
        }
    
        try{
            const response = await fetch('http://localhost:8080/user/signup', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-Type': 'application/json'
                }
        });
            const result = await response.json();
            //setUser([...user, result]);
            console.log(result, "result");
            if(result == 'success'){
                setIsRegisterd(true);
                setIsUserExist(false);
            }else{
                setIsUserExist(true);
            }
          
        }catch(e){
            console.log(e);
        }
    }

    

    return(
        <>
                    <Nav />
                    {isRegistered ? <><h2 style={{textAlign: 'center', marginTop: '200px', color: 'red'}}>Registration is successful</h2> 
                    <h5 style={{textAlign: 'center'}}>Login in <Link  to='/login'>HERE</Link> to continue exploring our products</h5>
                    </>:  <>
                     <h1 style={{ textAlign: 'center', color: 'brown' }}> Registration page</h1>
                    <fieldset className='fieldset-container'>
                        <form className='form-container' onSubmit={submitHandle}>
                            <label>Name:
                                <input ref={nameRef} type='text' />
                            </label><br />
                            <label>Email:
                                <input ref={emailRef} type='text' />
                            </label><br />
                            <label>Phone:
                                <input ref={phoneRef} type='text' />
                            </label><br />
                            <label>Password:
                                <input ref={pwdRef} type='text' />
                            </label><br />
                            <label>Address:
                                <input ref={addrRef} type='text' />
                            </label><br />
                            <button>Register</button>
                        </form>
                    </fieldset>
                    </>
}
                   {isUserExist && <h4 style={{textAlign: 'center', color: 'red'}} >Given Email is already registered</h4>} 
                    <footer style={{alignItems:'end', position: 'absolute', bottom: '0' }}>
                    &copy; 2025 balvinbakery. All rights reserved.
                 </footer>
                </>
    )
}