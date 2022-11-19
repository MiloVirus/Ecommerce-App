import React from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import HomePage from '../pages/HomePage'
import Products from '../pages/Products'
import Registration from '../pages/Registration'
import Login from '../pages/Login'
import Product from '../pages/Product'

const PublicRoutes = () => {
  return (
    <>
    <NavBar/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/products/:id" element={<Product/>} />
        </Routes>
    </>
  )
}

export default PublicRoutes