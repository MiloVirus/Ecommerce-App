import React from 'react'
import {Box,
        Text,
        FormControl,
        FormLabel,
        Button,
        FormHelperText,
        Input,
        Link
} from '@chakra-ui/react'

const Registration = () => {
  return (
    <>
    <Box textAlign={"center"} marginTop="2%" fontFamily={'Rubik'}>
    <Text fontSize="1.6rem" fontWeight="medium">Create your account</Text>
        <Box w={["90%","90%","60%","500px"]} m="auto" bg="gray.50" p={10} borderRadius="20px" fontFamily={'Rubik'} marginTop="2%" textAlign='center'>
        <FormControl>
            <FormLabel  paddingTop={3}>Name</FormLabel>
                <Input bg="white" type='name' />
            <FormLabel  paddingTop={3}>Last Name</FormLabel>
                <Input bg="white" type='lastName' />
            <FormLabel  paddingTop={3}>Email address</FormLabel>
                <Input bg="white" type='email' />
            <FormLabel  paddingTop={3}>Password</FormLabel>
                <Input bg="white" type='password' />  
                <FormHelperText>Password must be longer than 6 characters</FormHelperText>
                <Button id="createAccount"
                cursor={"pointer"}
                as="a"
                color="white"
                aria-label="contact"
                bg="#7BE0AD"
                my={5}
                pr={9}
                pl={9}
                w="40%">Submit</Button>
                <Text>
                Already have an account ?{' '}
                <Link color='teal.500' href='#'>
                    Login
                </Link>
                </Text>
        </FormControl>
        </Box>
    </Box>
    </>
  )
}

export default Registration