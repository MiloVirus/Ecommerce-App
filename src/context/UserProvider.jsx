import { UserContext } from './UserContext'
import React from 'react'
import { useState, useCallback } from 'react'
import { verifyTokenService } from '../services/userService'


const initialState = 
{
    uid: null,
    name: null
}

export const UserProvider = ({children}) => {

    
    const [user, setUser] = useState(initialState)


    const login = (data) => {

        setUser({
          name: data.user.name,
          email: data.user.email,
          uid: data.user.uid,
          lastName: data.user.lastName,
          city: data.user.city,
          address: data.user.address
        }) 
        

        window.localStorage.setItem(process.env.REACT_APP_TOKEN, data.token)
      
    }

    const saveData = (data) =>
    {
      setUser({
        name: data.user.name,
        email: data.user.email,
        uid: data.user.uid,
        lastName: data.user.lastName,
        city: data.user.city,
        address: data.user.address
      }) 

      window.localStorage.setItem(process.env.REACT_APP_TOKEN, data.token)
      
    }

    const logout = () => {

        window.localStorage.removeItem(process.env.REACT_APP_TOKEN)

        setUser({ id: null,
          name: null});
    }
    
    const verifyToken = useCallback( async () =>
    {
      const token = window.localStorage.getItem(process.env.REACT_APP_TOKEN)
      console.log(token)

      if(token)
      { 
        const data = await verifyTokenService()
        window.localStorage.setItem(token)
        
        setUser({
          name: data.user.name,
          uid: data.user.uid
        }) 

      } else {
        logout()
      }
    }, [])
    
  return (
    <UserContext.Provider value={{saveData, user, login , logout, verifyToken}}>
        {children}
    </UserContext.Provider>
    
  )
}

