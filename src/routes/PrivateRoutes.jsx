import React from 'react'
import {Routes, Route, Navigate,} from 'react-router-dom'
import PrivateNavBar from '../components/PrivateNavBar'
import HomePage from '../pages/HomePage'
import Products from '../pages/Products'
import Profile from '../pages/Profile'

const PrivateRoutes = () => {
  return (
    <>
    <PrivateNavBar/>
        <Routes>
            {/* Rutas Privadas*/}
            <Route path="/products" element={<Products/>} />
            <Route path="/profile" element={<Profile/>} />
            
            {/* Rutas Públicas*/}
            <Route path="/" element={<HomePage/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </>
  )
}

export default PrivateRoutes