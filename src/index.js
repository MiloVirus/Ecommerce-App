import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as React from 'react'
import './fonts/Rubik-Regular.ttf'
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
      <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals