import Nav from './Nav'
import {useState, useEffect} from 'react'

export default function Product(){
    const[product, setProduct] = useState([]);
    
    //async function used to fetch the product details
    async function getProduct(){

        try{
            const response = await fetch('http://localhost:8080/product');
            const result = await response.json();
            setProduct(result);
        }catch(e){
            console.log(e);
        }
    }

    //gets called whenever the component is loaded to fetch the product details
    useEffect(()=>{
        getProduct();
    },[]);

    console.log(product);

    const showProduct = product.map((p)=>{
        return(
            <>
            <div className='product-container'>
            <img src={p.Image_URL}/>
            <p>{p.Name}</p>
            <p>{p.Price}</p>
            </div>
            </>
        )
    })

    return(
        <>
        <Nav />
        {showProduct}
        </>
    )
}