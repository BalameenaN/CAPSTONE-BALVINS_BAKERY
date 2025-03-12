import { useState } from 'react'
import './App.css'
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home.jsx'

function App() {

    return(
        <>
        <Home />
        <Routes>
               <Route path='/' element={<Home />}/>
              {/*<Route path='/product' element={<Product />} />
               <Route path='/kids' element={<Kids />} />
               <Route path='/login' element={<Login />} />*/}
            </Routes>
        </>
    )
  
}

export default App
