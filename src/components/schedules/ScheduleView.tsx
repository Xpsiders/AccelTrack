import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useSchedules } from '../../hooks/useSchedules';
import { DaySchedule } from './DaySchedule';
import { ScheduleForm } from './ScheduleForm';
import type { Schedule, CreateScheduleRequest, DayOfWeek } from '../../types/schedule.types';

export const ScheduleView: React.FC = () => {
  const { schedules, loading, error, createSchedule, updateSchedule, deleteSchedule } = useSchedules();
  const [showForm, setShowForm] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState<Schedule | null>(null);

  const handleSubmit = async (data: CreateScheduleRequest) => {
    try {
      if (editingSchedule) {
        await updateSchedule(editingSchedule.id, data);
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
    return <div className="text-center py-8">Loading schedule...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  const days = Object.values(DayOfWeek);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Weekly Schedule</h2>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingSchedule(null);
          }}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          <Plus className="w-5 h-5" />
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

      <div className="mt-6">
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
  );
};