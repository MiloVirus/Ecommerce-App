import React from 'react'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import { Box, Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
     <Box marginBottom={'4%'}>
        <Flex w="100%" justifyContent="center" marginTop={'8%'}>
            <Box p={2}>
                <SocialIcon network="instagram" bgColor="#9CA3AF" style={{ height: 30, width: 30 }}/>
            </Box>
            <Box p={2}>
                <SocialIcon network="facebook" bgColor="#9CA3AF" style={{ height: 30, width: 30 }}/>
            </Box>
            <Box p={2}>
                <SocialIcon network="whatsapp" bgColor="#9CA3AF" style={{ height: 30, width: 30 }}/>
            </Box>
        </Flex>
        <Flex flexDirection={'column'} textAlign="center">
            <Text color="#9CA3AF" fontSize={[ 14, 14, 15, 15]} >
                © 2022 All rights reserved.
            </Text>
            <Text color="#9CA3AF" fontSize={[ 14, 14, 15, 15]} m={[ 3, 3, 0, 0]}>
                This is a fictional ecommerce site made for academic purposes.
            </Text>
        </Flex>
     </Box>
    </>
    
  )
}

export default Footer