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
            

        case types.logout:
                return{
                    logged: false
                }

        default:
            return state;
    }
    
}

export default ProductReducer