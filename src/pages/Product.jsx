import React from "react";
import { Box, Flex, Text, Button, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";

const Product = () => {
  const { id } = useParams();
  const { getProduct, product, addProduct } = useContext(ProductContext);

  useEffect(() => {
    getProduct(id);
  }, [id, getProduct]);

  const addToCart = () => {
    addProduct(product.uid);
  };

  return (
    <Flex margin="auto" w={["90%","90%","70%","70%"]} justifyContent='center' flexWrap={["wrap","wrap","nowrap","nowrap"]}>
      <Box marginTop={"3%"} w={["100%"]}>
        <Box w="100%" textAlign={"center"} fontFamily="Rubik">
          <Box className="digiName">
            <Text fontWeight="medium" fontSize="1.3em" color="#505050">
              {product.name}
            </Text>
          </Box>
          <Box>
            <Text fontSize={15}>{product.description}</Text>
          </Box>
          <Flex m={3} flexShrink="0.3" justifyContent={"center"}>
            <Image width="400px" src={product.imgUrl}></Image>
          </Flex>
          <Box m={3}>
            <Text fontSize={25} fontWeight="medium">
              {product.price}.99$
            </Text>
          </Box>
          <Flex flexShrink="0.3" justifyContent={"center"}>
            <Button
              onClick={addToCart}
              fontWeight={"medium"}
              className="viewMore"
              bg="#7BE0AD"
              color="white"
              m={2}
            >
              Add to cart
            </Button>
          </Flex>
        </Box>
      </Box>
      <Flex w={["100%","100%","100%","100%"]} alignSelf={"center"}  fontFamily="Rubik" p={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
        reprehenderit unde nulla placeat eum cumque, omnis impedit, facilis
        incidunt velit quibusdam nostrum, rerum magni ducimus corporis
        doloremque ea esse cupiditate.
      </Flex>
    </Flex>
  );
};

export default Product;
