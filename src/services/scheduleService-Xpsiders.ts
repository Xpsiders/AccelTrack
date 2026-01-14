import api from './api';
import type { Schedule, CreateScheduleRequest, UpdateScheduleRequest } from '../types/schedule.types';
import type { ApiResponse } from '../types/api.types';

export const getSchedules = async (): Promise<Schedule[]> => {
  const response = await api.get<ApiResponse<Schedule[]>>('/schedules');
  return response.data.data;
};

export const getSchedule = async (id: number): Promise<Schedule> => {
  const response = await api.get<ApiResponse<Schedule>>(`/schedules/${id}`);
  return response.data.data;
};

export const createSchedule = async (data: CreateScheduleRequest): Promise<Schedule> => {
  const response = await api.post<ApiResponse<Schedule>>('/schedules', data);
  return response.data.data;
};

export const updateSchedule = async (id: number, data: UpdateScheduleRequest): Promise<Schedule> => {
  const response = await api.put<ApiResponse<Schedule>>(`/schedules/${id}`, data);
  return response.data.data;
};

export const deleteSchedule = async (id: number): Promise<void> => {
  await api.delete(`/schedules/${id}`);
};

export const getTodaySchedule = async (): Promise<Schedule[]> => {
  const response = await api.get<ApiResponse<Schedule[]>>('/schedules/today');
  return response.data.data;
};
