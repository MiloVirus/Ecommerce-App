import { types } from "../types/types";

const ProductReducer = (state , action) => 
{
    switch(action.type)
    {
        case types.GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }

        case types.GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            }
            case types.ADD_PRODUCT_CART:
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            case types.DELETE_PRODUCT:
                return {
                    ...state,
                    cart: state.cart.filter( (product)=> product.id !== action.payload)
                
                }
            case types.EMPTY_CART:
                return {
                    ...state,
                    cart:[]
                }
            

        case types.logout:
                return{
                    logged: false
                }

        default:
            return state;
    }
    
}

export default ProductReducer