import { useState } from 'react'

import Home from './assets/components/Home/Home'
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './assets/components/NavBar';
import Menu from './assets/components/Menu/Menu';
import Footer from './assets/components/Footer/Footer';
import Contact from './assets/components/Contact/Contact';
import Login from './assets/components/Auth/Login';
import Register from './assets/components/Auth/Register';
import AddNewProduct from './assets/components/Admin/AddNewProduct'


function App() {
 

  return (
    <>
    <NavBar />
     <Routes>
     
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />}> </Route>
                {/* <Route path="/product-details/:id" element={<ProductDetails />} /> */}
                    {/* <Route path="us" element={<Home />} />
                    <Route path="mission" element={<Home />} />
                    <Route path="values" element={<Home />} /> */}
               
                <Route path="/contacts" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/add-product" element={<AddNewProduct />} />
               
                <Route path="*" element={<Home />} />
             </Routes>
             <Footer/>
     
    </>
  )
}

export default App
