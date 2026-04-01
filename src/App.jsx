import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'

const App = () => {
  return (
    
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
         <Route index element={<Home/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="/shop" element={<Shop/>}/>

        </Route>
       
      </Routes>
   </BrowserRouter>
    
  )
}

export default App

