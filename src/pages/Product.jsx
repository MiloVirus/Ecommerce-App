import React from 'react'
import {
  Box,
  Flex,
  Text,
  Button,
  Checkbox,
  Image
} from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import ProductContext from '../context/ProductContext';


const Product = () => {

  const {id} = useParams()
  const {getProduct, product} = useContext(ProductContext)

  useEffect(() => {
    getProduct(id);
  }, [id, getProduct]);

  return (
    <div>{product.name}</div>
  )
}

export default Product