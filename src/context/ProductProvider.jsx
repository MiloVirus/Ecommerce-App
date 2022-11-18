import {useReducer, useCallback} from 'react'
import {ProductContext} from './ProductContext'
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
        async() => {
            try
            {
                const response = await getProductsService()
                const products = response.products.map((item)=>
                {
                    return{
                        uid: item._id,
                        name: item.name,
                        description: item.description,
                        price: item.price,
                        imgUrl: item.imgUrl
                    }
                })
            
                dispatch(
                    {
                        type: types.GET_PRODUCT,
                        payload:products
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
            try
            {
                const response = await getProductByIdService()
                const products = 
                {
                        uid: response._id,
                        name: response.name,
                        description: response.description,
                        price: response.price,
                        imgUrl: response.imgUrl

                }
            
                dispatch(
                    {
                        type: types.GET_PRODUCT,
                        payload:products
                    }
                )
            }
            catch(error)
            {
                console.log(error)
            }
        },[]
    )

    const emptyCart = (car) =>
    {
        dispatch(
            {
                type: types.DELETE_PRODUCT_CAR,
                payload: car
            }
        )
    }

    return(
        <ProductContext.Provider value={{products: productState.products, total: productState.total, getProduct, getProducts, emptyCart }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider