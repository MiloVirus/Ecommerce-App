import React from 'react'
import { Box, Button, Flex, Text, SimpleGrid, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import leopold from '../images/Leopold.jpeg'
import leopold2 from '../images/Leopold2.jpeg'
import varmilo from '../images/Varmilo.jpeg'
import varmiloMac from '../images/VarmiloMAC.jpeg'

const HomePage = () => {
  return (
    <>
    <Box>
      <Flex id="callToAction" borderRadius="20px" w={["80%","80%","70%","70%"]} m="auto" fontFamily="Rubik" minH="600px" marginBottom={10}>
          <Flex flexWrap={'wrap'} alignSelf="center" width="80%" m="auto" >
              <Box w="100%">
                  <Text color="white" fontSize={['2rem','2.5rem','3.5rem','3.5rem']} align="center" fontWeight="bold">
                  Buy the best <Text as='span' color="#7BE0AD" className='ctaTextAnimation'>Mechanical Keyboards</Text> in the market
                  </Text>
              </Box>
              <Box w="100%" alignSelf="center" align="center" p={5}>
              <Link to="/products" relative="path">
                  <Button>View Products</Button>
              </Link>
              </Box>
          </Flex>
      </Flex>
      <Box w={["80%","80%","70%","70%"]} m="auto">
        <SimpleGrid
            bg='gray.50'
            columns={{ sm: 1, md: 2, lg: 2, xl: 4 }}
            spacing='8'
            p='10'
            textAlign='center'
            rounded='lg'
            color='gray.400'
          >
            <Box boxShadow='base' p='6' rounded='md' bg='white'>
              <Box fontFamily="Rubik" >
                <Text fontWeight="medium" >Leopold FC750R</Text>
                <Image src={leopold2}  w="100%"/>
                <Text fontWeight={'medium'} color="#7B7CE0">160.99 $</Text>
                <Button bg="#7BE0AD" color="white" m={2} fontWeight="normal" className='viewMore'>View more</Button>
              </Box>
            </Box>
            <Box boxShadow='base' p='6' rounded='md' bg='white'>
              <Box fontFamily="Rubik" >
                <Text fontWeight="medium" >Leopold FC900R</Text>
                <Image src={leopold}  w="100%"/>
                <Text fontWeight={'medium'} color="#7B7CE0">160.99 $</Text>
                <Button bg="#7BE0AD" color="white" m={2} fontWeight="normal" className='viewMore'>View more</Button>
              </Box>
            </Box>
            <Box boxShadow='base' p='6' rounded='md' bg='white'>
              <Box fontFamily="Rubik" >
                <Text fontWeight="medium" >Varmilo VA87M Mac</Text>
                <Image src={varmiloMac}  w="100%"/>
                <Text fontWeight={'medium'} color="#7B7CE0">160.99 $</Text>
                <Button bg="#7BE0AD" color="white" m={2} fontWeight="normal" className='viewMore'>View more</Button>
              </Box>
            </Box>
            <Box boxShadow='base' p='6' rounded='md' bg='white'>
              <Box fontFamily="Rubik" >
                <Text fontWeight="medium">Varmilo VA87M</Text>
                <Image src={varmilo}  w="100%"/>
                <Text fontWeight={'medium'} color="#7B7CE0">160.99 $</Text>
                <Button bg="#7BE0AD" color="white" m={2} fontWeight="normal" className='viewMore'>View more</Button>
              </Box>
            </Box>

        </SimpleGrid>
      </Box>
    </Box>
    </>   
  )
}

export default HomePage