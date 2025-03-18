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

    const cartList = cart.map((p)=>{

        return(
            <>
            <div className='product-container'>
            <img src={p.Image_URL}/>
           <h3>{p.Name}</h3>
            <h5>Price: ${p.Price}</h5>
            <h5>Rating: {p.Rating}</h5>
            <button className='product-btn' onClick={()=>clickHandle(p._id)}>Remove</button>
            </div>
            </>
        ) 
        
    })

    return(
       <>
       <Nav />
        <div className='main-container'>
     {cartList}
     </div>
       </>

    )

}