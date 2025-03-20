import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//component for checkout page
export default function Checkout() {
    const [isOrdered, setIsOrdered] = useState(false);  //state to be updated when the order is placed
    const navigate = useNavigate();

    const cartInitial = JSON.parse(localStorage.getItem('cart')) || []; //fetching cart value stored in local storage

    const totalPrice = cartInitial.reduce((acc, prod) => acc + prod.Price, 0);
    const shipping = 10

    let tax = Number((totalPrice * 0.07).toFixed(2));
    let amount = totalPrice + shipping + tax;

    async function clickHandle() {
        const id = cartInitial.map((c) => c._id); //extracting only id property from list of cart object
        //console.log(id);
        const data = {
            Id: id
        }

        try {
            // sending the ordered product id to DB
            const response = await fetch('http://localhost:8080/order/', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            console.log(result);
            if (result !== "") {
                console.log("successfully placed order");
                setIsOrdered(true);
            } else {
                console.log("not successful");
            }
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <>
            <button className='checkout-button' style={{ backgroundColor: 'brown', color: 'white' }} onClick={() => navigate('/')} >Home</button>
            {isOrdered ? <div style={{ textAlign: 'center', margin: '200px 50px' }}><h1 style={{ color: 'brown' }} >Thanks for placing your order!</h1> <h3>Continue shopping!</h3></div> : <div className='checkout-container'>
                <h3>Order Summary</h3>
                <hr />
                <p>Items({cartInitial.length}): ${totalPrice}</p>
                <p>Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Order total: ${amount} </h4>
                <button className='checkout-button' onClick={clickHandle}>Place order</button>
            </div>}
        </>
    )

}