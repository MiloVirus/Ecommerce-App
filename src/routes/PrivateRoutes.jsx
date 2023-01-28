import React from 'react'
import {Routes, Route, Navigate,} from 'react-router-dom'
import PrivateNavBar from '../components/PrivateNavBar'
import HomePage from '../pages/HomePage'
import Products from '../pages/Products'
import Profile from '../pages/Profile'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const PrivateRoutes = () => {
  return (
    <>
    <PrivateNavBar/>
        <Routes>
            {/* Rutas Privadas*/}
            <Route path="/products" element={<Products/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/cart" element={<Cart/>} />

            
            {/* Rutas Públicas*/}
            <Route path="/" element={<HomePage/>} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/products/:id" element={<Product/>} />
        </Routes>
    </>
  )
}

export default PrivateRoutes