import axios from 'axios'

const URL_AUTH = `${process.env.REACT_APP_URL_API}/auth/login`

const URL_USERS = `${process.env.REACT_APP_URL_API}/users`

const ConfigHeader = {
    headers:{'x-token' : localStorage.getItem(process.env.REACT_APP_TOKEN),}
}



export const loginService = async(data) =>
{
    const response = await axios.post(URL_AUTH, data)
    console.log(response.data)
    return response.data;
}

export const registerService = async(data) =>
{
    const response = await axios.post(URL_USERS, data)

    return response.data;
}

export const updateUserService = async(uid, data) =>
{
    const response = await axios.put(`${URL_USERS}/${uid}`, data, ConfigHeader)
    return response.data
}

export const verifyTokenService = async() =>
{
    const response = await axios.get(`${URL_USERS}`, ConfigHeader)

    return response.data
}