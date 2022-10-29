import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import HomePage from '../pages/HomePage'
import Products from '../pages/Products'
import Footer from '../components/Footer'
import Registration from '../pages/Registration'

const PublicRoutes = () => {
  return (
    <>
    <NavBar/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/registration" element={<Registration/>} />
        </Routes>
      <Footer/>
    </>
  )
}

export default PublicRoutes