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
    car:[]

}


function ProductProvider({children}) 
{
    
    const [productState, dispatch] = useReducer(ProductReducer, initialState)

    const getProducts = useCallback(
        async() => {
            try
            {
                const response = await getProductsService()
                const products = response.products.map((obj)=>
                {
                    return{
                        uid: obj._id,
                        name: obj.name,
                        description: obj.description,
                        price: obj.price,
                        imgUrl: obj.imgUrl
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

    const emptyCar = (car) =>
    {
        dispatch(
            {
                type: types.DELETE_PRODUCT_CAR,
                payload: car
            }
        )
    }

    return(
        <ProductContext.Provider value={{products: productState.products, total: productState.total, getProduct, getProducts, emptyCar }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider