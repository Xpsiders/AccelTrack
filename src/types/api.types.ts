export interface ApiError {
    message: string;
    status: number;
    errors?: Record<string, string[]>;
}

export interface ApiResponse{
    data: TemplateStringsArray;
    message?: string;
}

export interface PaginatedResponse<T> {
    data: T[];
    page: number;
    pageSize: number;
    total: number;

}