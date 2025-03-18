import {useState} from 'react';
import Nav from './Nav.jsx'

export default function Cart(){
    console.log("inside cart component");
    const cartInitial = JSON.parse(localStorage.getItem('cart')) || [];
    const[cart,setCart] = useState(cartInitial);
    
    
    function clickHandle(id){
        const newArr = cartInitial.filter((c)=> c._id !== id)
        localStorage.setItem('cart', JSON.stringify(newArr));
        console.log(newArr);
        setCart([...newArr]);
    }
    
    const totalPrice = cart.reduce((acc,prod)=>acc+prod.Price ,0);

    const cartList = cart.map((p)=>{

        return(
            <>
            <div className='product-container'>
            <img src={p.Image_URL}/>
           <h3>{p.Name}</h3>
            <h5>Price: ${p.Price}</h5>
            <button className='product-btn' onClick={()=>clickHandle(p._id)}>Remove</button>
            </div>
            </>
        ) 
        
    })
    console.log(cart.length, "length");

    return(
       <>
       <Nav />
       <h2 style={{marginTop:'30px', color: 'red'}}>Your cart</h2>
       <h4 style={{textAlign: 'center', color: 'brown'}}>Subtotal: ${totalPrice}</h4>
        <button className='checkout' style={{textAlign: 'center'}}>Proceed to checkout({cart.length})</button>
        <div className='main-container'>
        {cartList}
        </div>
       </>

    )

}