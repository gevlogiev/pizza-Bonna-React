import { useState } from 'react'



import Home from './assets/components/Home/Home'
import { Routes, Route, Outlet } from 'react-router-dom';
import { NavBar } from './assets/components/NavBar';
import Menu from './assets/components/Menu/Menu';
import Footer from './assets/components/Footer/Footer';
import Contact from './assets/components/Contact/Contact';
import Login from './assets/components/Auth/Login';
import Register from './assets/components/Auth/Register';
import AddNewProduct from './assets/components/Admin/AddNewProduct'
import GetAllProducts from './assets/components/Admin/GetAllProducts'
import Page404 from './assets/components/HelpPages/404';

// import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './assets/components/context/AuthContext';
import Logout from './assets/components/Auth/Logout';
import { BasketProvider } from './assets/components/context/BasketContext';
import Basket from './assets/components/Basket/Basket';
import AuthGuard from './assets/components/Guards/AuthGuards';



function App() {


  return (
    <>
      <AuthProvider>
        <BasketProvider>
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
            <Route path={"/logout"} element={<Logout />} />

            <Route element={<AuthGuard />}>

              {/* Admin Controll Panel */}
              <Route path="/add-product" element={<AddNewProduct />} />
              <Route path="/get-all-products" element={<GetAllProducts />} />
              {/* ************** */}



              {/* User Auth Panel */}
              <Route path="/basket" element={<Basket />} />
              <Route path="/get-all-products" element={<GetAllProducts />} />
              {/* ************** */}
            </Route>


            <Route path="*" element={<Page404 />} />

          </Routes>
          <Footer />
        </BasketProvider>
      </AuthProvider>
    </>
  )
}

export default App
