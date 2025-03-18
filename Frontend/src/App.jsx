import { createContext, useState, useEffect, useReducer } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home.jsx'
import Product from './components/Product.jsx'
import Kids from './components/Kids.jsx'
import Login from './components/Login.jsx'
import Icecream from './components/Icecream.jsx'
import Signup from './components/Signup.jsx'
import Cart from './components/Cart.jsx'
 

function App() {
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

    return(
        <>
        <Routes>
               <Route path='/' element={<Home />}/>
               <Route path='/product' element={<Product product={product} />} />
               <Route path='/kids' element={<Kids product={product} />} />
               <Route path='/login' element={<Login />} />
               <Route path='/icecream' element={<Icecream product={product}/>} />
               <Route path='/signup' element={<Signup />} />
               <Route path='/cart' element={<Cart />} />
            </Routes>
        
        </>
    )
  
}

export default App
