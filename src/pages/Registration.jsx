import React from 'react'
import { useState } from 'react';
import {Box,
        Text,
        FormControl,
        FormLabel,
        Button,
        FormHelperText,
        Input
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { registerService } from '../services/userService';

const Registration = () => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = async(e) => 
    {
        e.preventDefault()
        try {
            const response = await registerService({name: name, lastName:lastName, email:email, password:password})
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
 
  return (
    <>
    <Box textAlign={"center"} marginTop="2%" fontFamily={'Rubik'} color="#5A5A5A">
    <Text fontSize="1.6rem" fontWeight="medium">Create your account</Text>
        <Box w={["90%","90%","60%","500px"]} m="auto" bg="gray.50" p={10} borderRadius="20px" fontFamily={'Rubik'} marginTop="2%" textAlign='center' >
        <FormControl>
            <FormLabel  paddingTop={3}>Name</FormLabel>
                <Input value={name} bg="white" type='name' onChange={(e)=>setName(e.target.value)}/>
            <FormLabel  paddingTop={3}>Last Name</FormLabel>
                <Input value={lastName} bg="white" type='lastName' onChange={(e)=>setLastName(e.target.value)}/>
            <FormLabel  paddingTop={3}>Email address</FormLabel>
                <Input value={email} bg="white" type='email' onChange={(e)=>setEmail(e.target.value)}/>
            <FormLabel  paddingTop={3}>Password</FormLabel>
                <Input value={password} bg="white" type='password' onChange={(e)=>setPassword(e.target.value)}/>  
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
                w="40%"
                onClick={(e)=> submit(e)}>Submit</Button>
                <Text>
                Already have an account ?{' '}
                <Text as='a' color='teal.500'>
                    <Link Link to="/login" relative="path">Login</Link>
                </Text>
                </Text>
        </FormControl>
        </Box>
    </Box>
    </>
  )
}

export default Registration