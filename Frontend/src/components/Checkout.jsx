import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function Checkout(){
    const [isOrdered, setIsOrdered] = useState(false);
    const navigate= useNavigate();

    const cartInitial = JSON.parse(localStorage.getItem('cart')) || []; 

    const totalPrice = cartInitial.reduce((acc,prod)=>acc+prod.Price ,0);
    const shipping = 10

    let tax = Number((totalPrice * 0.07).toFixed(2));
    let amount = totalPrice + shipping + tax;

    function clickHandle(){

        setIsOrdered(true);

    }

    return(
        <>
        <button className='checkout-button' style={{backgroundColor: 'brown', color: 'white'}} onClick={()=> navigate('/')} >Home</button>
        {isOrdered ? <div style={{textAlign:'center', margin:'200px 50px'}}><h1 style={{color: 'brown'}} >Thanks for placing your order!</h1> <h3>Continue shopping!</h3></div> : <div className='checkout-container'>
        <h3>Order Summary</h3>
        <hr/>
        <p>Items({cartInitial.length}): ${totalPrice}</p>
        <p>Shipping: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h4>Order total: ${amount} </h4>
        <button className='checkout-button' onClick={clickHandle}>Place order</button>
        </div> }
        </>
    )

}