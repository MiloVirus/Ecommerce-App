import {useReducer, useCallback} from 'react'
import ProductContext from './ProductContext'
import ProductReducer  from './ProductReducer'
import { getProductsService, getProductByIdService} from '../services/productService'
import { types } from '../types/types'


const initialState =
{
    products: [],
    total: 0,
    product: {},
    cart:[]
}


function ProductProvider({children}) 
{
    
    const [productState, dispatch] = useReducer(ProductReducer, initialState)

    const getProducts = useCallback(
        async () => {
            try
            {
                const response = await getProductsService()

                const products = response.map((item)=>
                {
                    return{
                        uid: item._id,
                        name: item.name,
                        description: item.description,
                        price: item.price,
                        imgUrl: item.imgUrl,
                        stock: item.stock,
                        category: item.category
                    }
                })
                console.log(products)
                dispatch(
                    {
                        type: types.GET_PRODUCTS,
                        payload: products
                    }
                )

                dispatch(
                    {
                        type: types.GET_PRODUCT_TOTAL,
                        payload: response.total
                    }
                )
            
            }
            catch(error)
            {
                console.log(error)
            }
        },[]
    )   

    const getProduct = useCallback(
        async(uid) => {
            
                const response = await getProductByIdService(uid)
                console.log(response)
                const product = {
                        uid: response._id,
                        name: response.name,
                        description: response.description,
                        price: response.price,
                        imgUrl: response.imgUrl

                }
            
                dispatch(
                    {
                        type: types.GET_PRODUCT,
                        payload: product
                    }
                )
        },[]
    )
    const addProduct = async (uid) => {


        const response = await getProductByIdService(uid)
        console.log(uid)
        console.log(response)
        const product = {
          uid: response._id,
          name: response.name,
          description: response.description,
          imgsUrl: response.imgsUrl,
          price: response.price,
          discount: response.discount,
          discount_percentage: response.discount_percentage
        };
       
        
        const findProduct = productState.cart.find((product) => {
          
            return product.uid === uid  
        })

        console.log(findProduct);
    
        if (!findProduct) {
          dispatch({
            type: types.ADD_PRODUCT_CART,
            payload: product,
          });
          console.log('producto añadido')
        }else{
          console.log('producto ya se encuentra añadido en el carrito')
        }
      };
    

    const emptyCart = (cart) =>
    {
        dispatch(
            {
                type: types.DELETE_PRODUCT_CAR,
                payload: cart
            }
        )
    }
   
    return(
        <ProductContext.Provider value={{products: productState.products, product: productState.product, total: productState.total, cart:productState.cart, getProduct, getProducts, emptyCart, addProduct }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider