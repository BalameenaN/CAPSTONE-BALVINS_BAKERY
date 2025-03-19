 import {useState} from 'react'
 //function to create JSX element for each product

 
 export default function productMatching(prod){

    const[productID, setproductID] = useState("");
     
    async function clickHandle(id){
        

        const cartInitial = JSON.parse(localStorage.getItem('cart')) || [];

        try{
          const response = await fetch(`http://localhost:8080/product/id/${id}`);
          const result = await response.json();
          console.log(result);
         
          const newArr = [...cartInitial, result];
          console.log(newArr, "newArr");
          localStorage.setItem('cart', JSON.stringify(newArr));
           setproductID(id);

           setTimeout(()=>{
            setproductID("");
           }, 3000);
          
        }catch(e){
            console.log(e);
        }

    }

    const result = prod.map((p)=>{

        return(
            <>
            <div className='product-container'>
            <img src={p.Image_URL}/>
           <h3>{p.Name}</h3>
            <h5>Price: ${p.Price}</h5>
            <h5>Rating: {p.Rating}</h5>
            <button className='product-btn' onClick={()=>clickHandle(p._id)}>Add to cart</button>
            {(productID == p._id) && <h5 style={{color:'red'}}><span>&#10003;</span>Added to cart</h5>}
            </div>
            </>
        ) 
        
    })
    return result;
}