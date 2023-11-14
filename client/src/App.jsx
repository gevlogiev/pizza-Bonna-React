import { useState } from 'react'
// import style from './assets/components/styles/style.css'
import Home from './assets/components'
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './assets/components/NavBar';
import { Contact } from './assets/components/Contact';

function App() {
 

  return (
    <>
    <NavBar />
     <Routes>
     
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />}>
                    <Route path="us" element={<Home />} />
                    <Route path="mission" element={<Home />} />
                    <Route path="values" element={<Home />} />
                </Route>
                <Route path="/contacts" element={<Contact />} />
                <Route path="/characters" element={<Home />} />
                <Route path="/characters/:id" element={<Home />} />
                <Route path="*" element={<Home />} />
             </Routes>
     <div>Pizza Bonna</div>
    </>
  )
}

export default App
