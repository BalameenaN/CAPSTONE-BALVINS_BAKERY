import { useState } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home.jsx'
import Product from './components/Product.jsx'
import Kids from './components/Kids.jsx'
import Login from './components/Login.jsx'

function App() {

    return(
        <>
        <Routes>
               <Route path='/' element={<Home />}/>
              <Route path='/product' element={<Product />} />
               <Route path='/kids' element={<Kids />} />
               <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
  
}

export default App
