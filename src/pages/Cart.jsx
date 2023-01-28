import  {useState, useContext, useEffect} from "react";
import ProductContext from "../context/ProductContext";
import CartList from "../components/CartList";
//import PaypalCheckoutButton from "../components/PaypalCheckoutButton";
import React from 'react'

const Cart = () => {

    const { cart } = useContext ( ProductContext )

    const [total, setTotal] = useState(0);
  
    useEffect(() => {
        setTotal( cart.reduce((acumulador, product)=> 
            acumulador + product.price,0
        ))
      }, [cart])

  return (
    <div>{cart}</div>
  )
}

export default Cart