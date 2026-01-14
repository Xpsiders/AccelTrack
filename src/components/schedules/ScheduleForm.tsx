import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { DayOfWeek } from '../../types/schedule.types';
import type { CreateScheduleRequest } from '../../types/schedule.types';
import type { UpdateScheduleRequest } from '../../types/schedule.types';
import { scheduleSchema } from '../../utils/validators';

interface ScheduleFormProps {
  onSubmit: (data: CreateScheduleRequest | UpdateScheduleRequest) => Promise<void>;
  onCancel: () => void;
  initialData?: Partial<CreateScheduleRequest>;
}

export const ScheduleForm: React.FC<ScheduleFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<CreateScheduleRequest>({
    resolver: zodResolver(scheduleSchema),
    defaultValues: initialData || { dayOfWeek: DayOfWeek.MONDAY },
  });

  const days = Object.values(DayOfWeek);

  return (
    <div className="bg-indigo-50 p-4 rounded-lg mb-6">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <select
              {...register('dayOfWeek')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            >
              {days.map(day => (
                <option key={day} value={day}>
                  {day.charAt(0) + day.slice(1).toLowerCase()}
                </option>
              ))}
            </select>
            {errors.dayOfWeek && <p className="text-red-500 text-sm mt-1">{errors.dayOfWeek.message}</p>}
          </div>

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
              {...register('startTime')}
              type="time"
              placeholder="Start Time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            {errors.startTime && <p className="text-red-500 text-sm mt-1">{errors.startTime.message}</p>}
          </div>

          <div>
            <input
              {...register('endTime')}
              type="time"
              placeholder="End Time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            {errors.endTime && <p className="text-red-500 text-sm mt-1">{errors.endTime.message}</p>}
          </div>

          <div className="col-span-2">
            <input
              {...register('room')}
              type="text"
              placeholder="Room (optional)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : 'Save Class'}
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