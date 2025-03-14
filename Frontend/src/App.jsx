import { createContext, useState, useEffect } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home.jsx'
import Product from './components/Product.jsx'
import Kids from './components/Kids.jsx'
import Login from './components/Login.jsx'


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
              <Route path='/product' element={<Product product={product}/>} />
               <Route path='/kids' element={<Kids product={product}/>} />
               <Route path='/login' element={<Login />} />
            </Routes>
        
        </>
    )
  
}

export default App
