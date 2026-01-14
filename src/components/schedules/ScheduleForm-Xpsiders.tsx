import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DayOfWeek } from '../../types/schedule.types';
import type { CreateScheduleRequest } from '../../types/schedule.types';
import { scheduleSchema } from '../../utils/validators';

interface ScheduleFormProps {
    onSubmit: (data: CreateScheduleRequest) => Promise<void>;
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
        <div className="card mb-3">
            <div className="card-body">
                <div className="row g-3">
                    <div className="col-md-6">
                        <select
                            {...register('dayOfWeek')}
                            className="form-select"
                        >
                            {days.map(day => (
                                <option key={day} value={day}>
                                    {day.charAt(0) + day.slice(1).toLowerCase()}
                                </option>
                            ))}
                        </select>
                        {errors.dayOfWeek && <p className="text-danger small mt-1">{errors.dayOfWeek.message}</p>}
                    </div>

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
                            {...register('startTime')}
                            type="time"
                            placeholder="Start Time"
                            className="form-control"
                        />
                        {errors.startTime && <p className="text-danger small mt-1">{errors.startTime.message}</p>}
                    </div>

                    <div className="col-md-6">
                        <input
                            {...register('endTime')}
                            type="time"
                            placeholder="End Time"
                            className="form-control"
                        />
                        {errors.endTime && <p className="text-danger small mt-1">{errors.endTime.message}</p>}
                    </div>

                    <div className="col-12">
                        <input
                            {...register('room')}
                            type="text"
                            placeholder="Room (optional)"
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="d-flex gap-2 mt-3">
                    <button
                        onClick={handleSubmit(onSubmit)}
                        disabled={isSubmitting}
                        className="btn btn-primary"
                    >
                        {isSubmitting ? 'Saving...' : 'Save Class'}
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