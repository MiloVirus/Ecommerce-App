import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import PublicRoutes from './PublicRoutes';

const AppRouter = () => {
  return (
    <>
        <Router>
            <PublicRoutes/>
        </Router>
    </>
  )
}

export default AppRouter