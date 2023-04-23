import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
headers:{
        'Content-type' : 'application/json',
        Accept: 'application/json',
    },

});

export const apiLogin = (data) => axiosInstance.post('/auth/login',data);
export const apiLogout = () => axiosInstance.post('/auth/logout');
export const apiRegister = (data) => axiosInstance.post('/auth/register',data);
export const apiCreateTiffin = (data) => axiosInstance.post('/tiffin',data);



export default axiosInstance;