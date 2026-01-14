import api from './api';
import type { Test, CreateTestRequest, UpdateTestRequest } from '../types/test.types';
import type { ApiResponse } from '../types/api.types';

export const getTests = async (): Promise<Test[]> => {
  const response = await api.get<ApiResponse<Test[]>>('/tests');
  return response.data.data;
};

export const getTest = async (id: number): Promise<Test> => {
  const response = await api.get<ApiResponse<Test>>(`/tests/${id}`);
  return response.data.data;
};

export const createTest = async (data: CreateTestRequest): Promise<Test> => {
  const response = await api.post<ApiResponse<Test>>('/tests', data);
  return response.data.data;
};

export const updateTest = async (id: number, data: UpdateTestRequest): Promise<Test> => {
  const response = await api.put<ApiResponse<Test>>(`/tests/${id}`, data);
  return response.data.data;
};

export const deleteTest = async (id: number): Promise<void> => {
  await api.delete(`/tests/${id}`);
};

export const getUpcomingTests = async (): Promise<Test[]> => {
  const response = await api.get<ApiResponse<Test[]>>('/tests/upcoming');
  return response.data.data;
};
