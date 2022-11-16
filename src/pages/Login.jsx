import React from 'react'
import Swal from 'sweetalert2'
import { useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {Box,
        Text,
        FormControl,
        FormLabel,
        Button,
        Input
} from '@chakra-ui/react'
import { loginService } from '../services/userService'
import { UserContext } from '../context/UserContext'




const Login = () => {

  const navigate = useNavigate()

  const {login} = useContext(UserContext)
  
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = async(e) =>
    {
        e.preventDefault()
        try {
          const response = await loginService({email:email, password:password})
          console.log(response)
          login(response)
          navigate('/profile')
        } catch (error) {
          console.log(error)
          Swal.fire(
            'Error',
            error.response.data.msg,
            'error'
          )
        }
    }


  return (
    <>
    <Box textAlign={"center"} marginTop="2%" fontFamily={'Rubik'} color="#5A5A5A">
    <Text fontSize="1.6rem" fontWeight="medium">Login</Text>
        <Box w={["90%","90%","60%","500px"]} m="auto" bg="gray.50" p={10} borderRadius="20px" fontFamily={'Rubik'} marginTop="2%" textAlign='center' >
        <FormControl>
            <FormLabel  paddingTop={3}>Email address</FormLabel>
                <Input value={email} bg="white" type='email' onChange={(e)=>setEmail(e.target.value)}/>
            <FormLabel  paddingTop={3}>Password</FormLabel>
                <Input value={password} bg="white" type='password' onChange={(e)=>setPassword(e.target.value)}/>  
                <Button id="createAccount"
                cursor={"pointer"}
                as="a"
                color="white"
                aria-label="contact"
                bg="#7BE0AD"
                my={5}
                pr={9}
                pl={9}
                onClick={(e)=> submit(e)}
                w="40%">Submit</Button>
        </FormControl>
        </Box>
    </Box>
    </>
  )
}

export default Login