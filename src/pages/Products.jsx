import React from "react";
import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Button,
  Checkbox,
  Image
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import  ProductContext  from "../context/ProductContext";
import { NavLink } from "react-router-dom";

const Products = () => {

  
  const {user, verifyToken} = useContext(UserContext)
  const {products, total, getProducts} = useContext(ProductContext)
 


  useEffect(() => {
    getProducts()
    
  }, [getProducts])

  console.log(products)
  
  return (
    <>
      <Box fontFamily="Rubik" w="80%" margin={"auto"}>
        
        <Box overflowY="auto" h={["70%", "70%", "90%"]} borderRadius="20px">
          <SimpleGrid
            bg="gray.50"
            columns={{ sm: 2, md: 2, lg: 3 }}
            spacing="5"
            p="10"
            textAlign="center"
            rounded="lg"
            color="gray.400"
            fontFamily="Rubik"
            fontWeight="medium"
          >
            {products.map((element, index) => (
              <Box
                w="100%"
                key={index}
                boxShadow="xs"
                p="6"
                rounded="md"
                bg="white"
              >
                <Flex>
                  <Box w="100%">
                    <Box className="digiName">
                      <Text fontSize="1.3em" color="#505050">
                        {element.name}
                      </Text>
                    </Box>
                    <Box className="digiLevel">
                      <Text fontSize={15}>{element.description}</Text>
                    </Box>
                  <Flex m={3} flexShrink="0.3" className="digiLevel" justifyContent={"center"}>
                    <Image width="400px" src={element.imgUrl}></Image>
                  </Flex>
                  <Box flexShrink="0.3" className="digiLevel" justifyContent={"center"}>
                    <Box m={3}>
                      <Text fontSize={25} fontWeight="medium">{element.price}.99$</Text>
                    </Box>
                    <Flex justifyContent={"center"}>
                    <NavLink to={`/products/${element.uid}`} className="button">
                    <Button fontWeight={'medium'} className='viewMore' bg="#7BE0AD" color="white" m={2}>
                      View More
                    </Button>
                    </NavLink>
                    <Button fontWeight={'medium'} className='viewMore' bg="#e0b0d5" color="white" m={2}>
                      Add to cart
                    </Button>
                    </Flex>
                  </Box>
                  </Box>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default Products;
