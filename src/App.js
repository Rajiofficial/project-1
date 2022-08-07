 import React from 'react'
 import Login from './pages/Login'
 import Register from './pages/Register'
import {BrowserRouter ,Route, Routes,} from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'
import Product from './components/Product'
import ProductList from './pages/ProductList'
import Slider from './components/slider'
const App = () => {
  return (
    <BrowserRouter>
   

 
    <Routes>
               <Route path='/home' element={<Home/>} ></Route>
               <Route path='/register' element={<Register/>}></Route>
               <Route path='/login' element={<Login/>}></Route>
               <Route path='/cart' element={<Cart/>}></Route>
               <Route path='/product' element={<Product/>}></Route>
               <Route path='/productlist' element={<ProductList/>}></Route>
               <Route path='/slider' element={<Slider/>}></Route>

               <Route path='/' element={<Home/>}></Route>
              
              
 
     </Routes>
    </BrowserRouter>

    
  )
}

export default App 

