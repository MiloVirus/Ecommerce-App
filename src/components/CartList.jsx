import React from 'react'
import { useContext } from 'react'
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import ProductContext  from '../context/ProductContext'
import { NavLink } from 'react-router-dom'

const CartList = () => {

    const {cart, deleteProductCart} = useContext(ProductContext)

  return (
   <>
   {
    cart?.map( (product) =>(
      <Box  className="card rounded-3 mb-4" key={product.uid}>

        <Box id="Box_cart" className="card-body">
          <Box className="row d-flex justify-content-between align-items-center">
            <Box id="img_cart" className="col-md-3 col-lg-2 col-sm-8">
              <Image  src={product.imgUrl} className="img-fluid" alt={product.name} />
            </Box>

            <Box id="Box_productCartText" className="col-md-4 col-lg-4 col-sm-10">
              <Text>{product.name}</Text>
              <Text><span className="text-muted">{product.description}</span></Text>
            </Box>
            <Box id="Box_productCartPrice" className="col-md-3 col-lg-3 col-sm-10">
              <Text>$ {product.price} mxn</Text>
            </Box>

            <Box className="col-md-2 col-lg-3 col-sm-12">
              <NavLink id="btn_seeProductCart" className="btn btn-blanck-form w-100 mb-2" to={`/products/${product.uid}`}> 
                Detalles
              </NavLink>
              <Button id="btn_deleteProductCart" onClick={()=> deleteProductCart(product.uid)} className="btn btn-danger w-100">
                Quitar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      ))

}
</>
  )
}

export default CartList