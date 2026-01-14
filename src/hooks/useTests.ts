import { useState, useEffect } from 'react';
import { Test, CreateTestRequest, UpdateTestRequest } from '../types/test.types';
import * as testService from '../services/testService';

interface UseTestsReturn {
  tests: Test[];
  loading: boolean;
  error: string | null;
  createTest: (data: CreateTestRequest) => Promise<void>;
  updateTest: (id: number, data: UpdateTestRequest) => Promise<void>;
  deleteTest: (id: number) => Promise<void>;
  refetch: () => Promise<void>;
}

export const useTests = (): UseTestsReturn => {
  const [tests, setTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTests = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const data = await testService.getTests();
      setTests(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch tests');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);

  const createTest = async (data: CreateTestRequest): Promise<void> => {
    const newTest = await testService.createTest(data);
    setTests(prev => [...prev, newTest]);
  };

  const updateTest = async (id: number, data: UpdateTestRequest): Promise<void> => {
    const updated = await testService.updateTest(id, data);
    setTests(prev => prev.map(test => test.id === id ? updated : test));
  };

  const deleteTest = async (id: number): Promise<void> => {
    await testService.deleteTest(id);
    setTests(prev => prev.filter(test => test.id !== id));
  };

  return { tests, loading, error, createTest, updateTest, deleteTest, refetch: fetchTests };
};