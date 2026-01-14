import api from './api';
import type { User, LoginRequest, RegisterRequest, AuthResponse } from '../types/user.types';
import type { ApiResponse } from '../types/api.types';

export const login = async (credentials: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/login', credentials);
    return response.data.data;
};

export const register = async (data: RegisterRequest): Promise<AuthResponse> => {
    const response = await api.post<ApiResponse<AuthResponse>>('/auth/register', data);
    return response.data.data;
};

export const logout = async (): Promise<void> => {
    await api.post('/auth/logout')
    localStorage.removeItem('token')
};

export const getCurrentUser = async (): Promise<User> => {
    const response = await api.get<ApiResponse<User>>('/auth/me');
    return response.data.data;
};