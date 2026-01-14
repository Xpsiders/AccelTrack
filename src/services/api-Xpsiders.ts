import axios, { AxiosError } from 'axios';
import type { AxiosInstance } from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';
import type { ApiError } from '../types/api.types';

const api:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    },
});

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem('token');
        if (token && config.headers) {
            config.headers.Authorization = 'Bearer ${token}';
        }
        return config;
    },
    (error : AxiosError) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<ApiError>) =>{
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;