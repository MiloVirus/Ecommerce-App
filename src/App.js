import './App.css';
import AppRouter from './routes/AppRouter';
import { UserProvider } from './context/UserProvider';
import {PayPalScriptProvider} from '@paypal/react-paypal-js'
import  ProductProvider  from './context/ProductProvider'



function App() {
  return (
    <>
      <UserProvider>
       <PayPalScriptProvider options ={{"client-id": "AWNa_BzG4vYdmY3RoXbz51o9iBP8J_-aq-J8VBsHke1nkXvpmnTJ1ZHG23vdaKeBz14e7KEtSRuWhVKE"}}>
        <ProductProvider>
          <AppRouter/>
        </ProductProvider>
       </PayPalScriptProvider>
      </UserProvider>
    </>
  );
}

export default App;
