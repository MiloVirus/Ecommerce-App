import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { NavLink } from 'react-router-dom'

const CartList = () => {

    const {cart, deleteProductCart} = useContext(ProductContext)

  return (
   <>
   {
    cart?.map((product)=>
   {
    
   })
   }
   </>
  )
}

export default CartList