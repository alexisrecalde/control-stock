import axios, { AxiosInstance } from 'axios';

export const getApi = (authHeader = true) : AxiosInstance => {
    const headers = getAuthApi();
    const axiosConfig = {
        baseURL: 'http://localhost:5000/api/',
        headers: authHeader ? headers : {}
    };
    return axios.create(axiosConfig);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const getAuthApi = async () => {
    return { Authorization: `Bearer ${getToken()}` };
}

