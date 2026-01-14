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
    <div className="card p-3">
      <div className="">
        <div className="row g-3">
          <div className="col-md-6">
            <input
              {...register('subject')}
              type="text"
              placeholder="Subject"
              className="form-control"
            />
            {errors.subject && <p className="text-danger small mt-1">{errors.subject.message}</p>}
          </div>

          <div className="col-md-6">
            <input
              {...register('topic')}
              type="text"
              placeholder="Topic"
              className="form-control"
            />
            {errors.topic && <p className="text-danger small mt-1">{errors.topic.message}</p>}
          </div>

          <div className="col-md-6">
            <input
              {...register('testDate')}
              type="date"
              className="form-control"
            />
            {errors.testDate && <p className="text-danger small mt-1">{errors.testDate.message}</p>}
          </div>

          <div className="col-md-6">
            <input
              {...register('testTime')}
              type="time"
              className="form-control"
            />
            {errors.testTime && <p className="text-danger small mt-1">{errors.testTime.message}</p>}
          </div>
        </div>

        <div className="mt-3">
          <textarea
            {...register('notes')}
            placeholder="Notes (optional)"
            className="form-control"
            rows={3}
          />
        </div>

        <div className="d-flex gap-2 mt-3">
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="btn btn-primary"
          >
            {isSubmitting ? 'Saving...' : 'Save Test'}
          </button>
          <button
            onClick={onCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};