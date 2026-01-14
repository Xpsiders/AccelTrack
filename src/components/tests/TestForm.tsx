import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { CreateTestRequest } from '../../types/test.types';
import { testSchema } from '../../utils/validators';

interface TestFormProps {
  onSubmit: (data: CreateTestRequest) => Promise<void>;
  onCancel: () => void;
  initialData?: Partial<CreateTestRequest>;
}

export const TestForm: React.FC<TestFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CreateTestRequest>({
    resolver: zodResolver(testSchema),
    defaultValues: initialData,
  });

  return (
    <div className="bg-indigo-50 p-4 rounded-lg">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              {...register('subject')}
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
          </div>

          <div>
            <input
              {...register('topic')}
              type="text"
              placeholder="Topic"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            {errors.topic && <p className="text-red-500 text-sm mt-1">{errors.topic.message}</p>}
          </div>

          <div>
            <input
              {...register('testDate')}
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            {errors.testDate && <p className="text-red-500 text-sm mt-1">{errors.testDate.message}</p>}
          </div>

          <div>
            <input
              {...register('testTime')}
              type="time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            {errors.testTime && <p className="text-red-500 text-sm mt-1">{errors.testTime.message}</p>}
          </div>
        </div>

        <textarea
          {...register('notes')}
          placeholder="Notes (optional)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          rows={3}
        />

        <div className="flex gap-2">
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : 'Save Test'}
          </button>
          <button
            onClick={onCancel}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};