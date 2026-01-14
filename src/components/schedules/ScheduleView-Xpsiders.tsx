import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useSchedules } from '../../hooks/useSchedules';
import { DaySchedule } from './DaySchedule';
import { ScheduleForm } from './ScheduleForm';
import { DayOfWeek } from '../../types/schedule.types';
import type { Schedule, CreateScheduleRequest, UpdateScheduleRequest } from '../../types/schedule.types';

export const ScheduleView: React.FC = () => {
    const { schedules, loading, error, createSchedule, updateSchedule, deleteSchedule } = useSchedules();
    const [showForm, setShowForm] = useState(false);
    const [editingSchedule, setEditingSchedule] = useState<Schedule | null>(null);

    const handleSubmit = async (data: CreateScheduleRequest) => {
        try {
            if (editingSchedule) {
                await updateSchedule(editingSchedule.id, data as UpdateScheduleRequest);
                setEditingSchedule(null);
            } else {
                await createSchedule(data);
            }
            setShowForm(false);
        } catch (err) {
            console.error('Failed to save schedule:', err);
        }
    };

    const handleEdit = (schedule: Schedule) => {
        setEditingSchedule(schedule);
        setShowForm(true);
    };

    const handleCancel = () => {
        setShowForm(false);
        setEditingSchedule(null);
    };

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this class?')) {
            try {
                await deleteSchedule(id);
            } catch (err) {
                console.error('Failed to delete schedule:', err);
            }
        }
    };

    if (loading) {
        return <div className="text-center py-4">Loading schedule...</div>;
    }

    if (error) {
        return <div className="text-center py-4 text-danger">{error}</div>;
    }

    const days = Object.values(DayOfWeek);

    return (
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="h5 mb-0">Weekly Schedule</h2>
                    <button
                        onClick={() => {
                            setShowForm(!showForm);
                            setEditingSchedule(null);
                        }}
                        className="btn btn-primary d-flex align-items-center gap-2"
                    >
                        <Plus />
                        Add Class
                    </button>
                </div>

                {showForm && (
                    <ScheduleForm
                        onSubmit={handleSubmit}
                        onCancel={handleCancel}
                        initialData={editingSchedule || undefined}
                    />
                )}

                <div className="mt-3">
                    {days.map(day => {
                        const daySchedules = schedules.filter(s => s.dayOfWeek === day);
                        return (
                            <DaySchedule
                                key={day}
                                day={day}
                                schedules={daySchedules}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};