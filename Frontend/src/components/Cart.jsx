import { useState } from 'react';
import Nav from './Nav.jsx'
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const navigate = useNavigate();

    console.log("inside cart component");
    const cartInitial = JSON.parse(localStorage.getItem('cart')) || [];  //retrieving the cart information stored in local storage 
    const [cart, setCart] = useState(cartInitial); //state to keep track of the cart details


    function clickHandle(id) {
        const newArr = cartInitial.filter((c) => c._id !== id)
        localStorage.setItem('cart', JSON.stringify(newArr)); //updating the local storage after removing the required product
        console.log(newArr);
        setCart([...newArr]);
    }

    function checkoutHandle() {
        navigate('/checkout');

    }

    const totalPrice = cart.reduce((acc, prod) => acc + prod.Price, 0); //using reducer method to calculate the total price

    const cartList = cart.map((p) => {

        return (
            <>
                <div className='product-container'>
                    <img src={p.Image_URL} />
                    <h3>{p.Name}</h3>
                    <h5>Price: ${p.Price}</h5>
                    <button className='product-btn' onClick={() => clickHandle(p._id)}>Remove</button>
                </div>
            </>
        )

    })

    return (
        <>
            <Nav />
            <h2 style={{ marginTop: '30px', color: 'red' }}>Your cart</h2>
            <h4 style={{ textAlign: 'center', color: 'brown' }}>Subtotal: ${totalPrice}</h4>
            <button className='checkout' style={{ textAlign: 'center' }} onClick={checkoutHandle}>Proceed to checkout({cart.length})</button>
            <div className='main-container'>
                {cartList}
            </div>
        </>

    )

}