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
import GetAllProducts from './assets/components/Admin/GetAllProducts'
import Page404 from './assets/components/HelpPages/404';


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


        {/* Admin Controll Panel */}
        <Route path="/add-product" element={<AddNewProduct />} />
        <Route path="/get-all-products" element={<GetAllProducts />} />
        {/* ************** */}



        {/* User Auth Panel */}
        {/* <Route path="/add-product" element={<AddNewProduct />} />
          <Route path="/get-all-products" element={<GetAllProducts />} /> */}
        {/* ************** */}


        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
