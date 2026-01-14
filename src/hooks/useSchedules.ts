import { useState, useEffect } from 'react';
import type { Schedule, CreateScheduleRequest, UpdateScheduleRequest } from '../types/schedule.types';
import * as scheduleService from '../services/scheduleService';

interface UseSchedulesReturn {
  schedules: Schedule[];
  loading: boolean;
  error: string | null;
  createSchedule: (data: CreateScheduleRequest) => Promise<void>;
  updateSchedule: (id: number, data: UpdateScheduleRequest) => Promise<void>;
  deleteSchedule: (id: number) => Promise<void>;
  refetch: () => Promise<void>;
}

export const useSchedules = (): UseSchedulesReturn => {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSchedules = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const data = await scheduleService.getSchedules();
      setSchedules(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch schedules');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  const createSchedule = async (data: CreateScheduleRequest): Promise<void> => {
    const newSchedule = await scheduleService.createSchedule(data);
    setSchedules(prev => [...prev, newSchedule]);
  };

  const updateSchedule = async (id: number, data: UpdateScheduleRequest): Promise<void> => {
    const updated = await scheduleService.updateSchedule(id, data);
    setSchedules(prev => prev.map(schedule => schedule.id === id ? updated : schedule));
  };

  const deleteSchedule = async (id: number): Promise<void> => {
    await scheduleService.deleteSchedule(id);
    setSchedules(prev => prev.filter(schedule => schedule.id !== id));
  };

  return { schedules, loading, error, createSchedule, updateSchedule, deleteSchedule, refetch: fetchSchedules };
};