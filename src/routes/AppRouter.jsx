import React from 'react'
import { useContext, useEffect} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes'
import Footer from '../components/Footer'

const AppRouter = () => {
  
  const {user, verifyToken} = useContext(UserContext)

  useEffect(() => {
    
    verifyToken()

  }, [verifyToken])
  

  return (
    
        <Router>
          { user ? (<PrivateRoutes/>) : (<PublicRoutes/>) } 
          <Footer/>
        </Router>
    
  )
}

export default AppRouter