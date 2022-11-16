import React from 'react'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { Button, Flex, Image, Text, Box, Input, FormControl } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom'
import avatar from '../images/avatar.jpg'
import { updateUserService } from '../services/userService';
import Swal from 'sweetalert2';

const Profile = () => {

    const {user, saveData} = useContext(UserContext)
    const navigate = useNavigate()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

    const [inputEdit, setInputEdit] = useState(false)

    const switchInput = () =>
    {
        setInputEdit(!inputEdit)
    }

    const save = async(e) =>
    {
        e.preventDefault()
        
        try {

            const response = await updateUserService( user.uid, {name: name, email: email})
            console.log(response)
            saveData(response)

          } catch (error) {
            console.log(error)
            Swal.fire(
              'Error',
              error.response.data.msg,
              'error'
            )
          }
          
        setInputEdit(!inputEdit)
    }
    
    const InitFields = () => 
    {
        return(
            <>
                <Box m={5}>
                    <Text fontWeight="medium" fontSize={26} marginBottom={2}>
                    {user.name} {user.lastName}
                    </Text>
                    <Text fontWeight="regular" fontSize={18} marginBottom={2}>
                    {user.email}
                    </Text>
                    <Button marginBottom={2} onClick={switchInput}>Edit</Button>
                </Box>
            </>
        )
    }

    const EditFields = () => 
    {
        return(
            <>
                <Box m={5}>
                    <FormControl>
                        <Input value={name} name="name" type='text' fontWeight="medium" fontSize={26} marginBottom={2} placeholder={user.name + user.lastName} onChange={(e)=>setName(e.target.value)}/>
                        <Input value={email} name="email" type='email' fontWeight="regular" fontSize={18} marginBottom={2} placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}/>
                        <Button marginBottom={2} onClick={save}>Save</Button>
                    </FormControl>
                </Box>
            </>
        )
    }
        

  return (
    <>
    <Flex w="50%" m="auto" textAlign="left" fontFamily="Rubik" justifyContent='center'>
        <Box m={5}>
            <Image w="200px" src={avatar} borderRadius={10}/>
        </Box>    
       {
        inputEdit? (<EditFields/>) : (<InitFields/>)
       }
    </Flex>
    </>
  )
}

export default Profile