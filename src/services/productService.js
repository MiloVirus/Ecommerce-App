import axios from 'axios'

const URL_PRODUCT = `${process.env.REACT_APP_URL_API}/products`

export const getProductsService = async() =>
{
    const response = await axios.get(URL_PRODUCT)

    return response.data
}

export const getProductByIdService = async(uid) =>
{
    const response = await axios.get(`${URL_PRODUCT}/${uid}`)

    return response.data
}