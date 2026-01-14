export interface User{
    id: number;
    email: string;
    fullName: string;
    createdAt: string;
    updatedAt: string;
}

export interface LoginRequest{
    email: string;
    password: string;
}

export interface RegisterRequest{
    email: string;
    password: number;
    fullName: string;
}

export interface AuthResponse{
    token: string;
    user: User;
}